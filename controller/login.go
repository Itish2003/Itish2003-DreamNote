package controller

import (
	"net/http"
	"testingReact/initializers"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"itish.github.io/model"
)

func Login(c *gin.Context) {
	var body struct {
		Username string `form:"username"`
		Email    string `form:"email"`
		Password string `form:"password"`
	}

	if err := c.ShouldBind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "error binding the data to body.",
		})
		return
	}

	var user *model.User
	initializers.CONNECTLOGIN.Find(&user, "username=?", body.Username)
	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Error while finding the user",
		})
		return
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid password",
		})
		return
	}

	// Respond with user data
	userData := gin.H{
		"username": user.Username,
		"email":    user.Email,
	}
	c.JSON(http.StatusOK, gin.H{
		"message":  "Successfully Logged In!",
		"userData": userData,
	})

	// Optionally, you can send the data to another endpoint as well
	// This is just an example, adjust the URL and data as needed
	// _, err = http.Post("http://localhost:8080/v1/", "application/json", bytes.NewBufferString(fmt.Sprintf(`{"username": "%s", "email": "%s"}`, user.Username, user.Email)))
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{
	// 		"message": "Invalid password",
	// 	})
	// 	return
	// }

	// No need for c.Redirect here
}
