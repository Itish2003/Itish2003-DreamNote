package route

import (
	"testingReact/controller"

	"github.com/gin-gonic/gin"
)

func Route(r *gin.Engine) *gin.RouterGroup {
	route := r.Group("v1")
	{
		route.GET("/signupdone", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "sucessfully signed up",
			})
		})
		route.GET("/logindone", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "sucessfully signed up",
			})
		})
		route.POST("/signup", controller.SignUp)
		route.POST("/login", controller.Login)
	}
	return route
}
