package controller

import (
	"net/http"
	"testingReact/initializers"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"itish.github.io/model"
)

func SignUp(c *gin.Context) {
	var body struct {
		Username string `form:"username"`
		Email    string `form:"email"`
		Password string `form:"password"`
	}

	if err := c.ShouldBind(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "error binding body",
		})
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "error encrypting the password",
		})
		return
	}

	user := model.User{
		Username: body.Username,
		Email:    body.Email,
		Password: string(hash),
	}

	result := initializers.CONNECTLOGIN.Create(&user)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "error creating user",
		})
		return
	}

	c.Redirect(http.StatusSeeOther, "/v1/signupdone")
}
