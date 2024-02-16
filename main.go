package main

import (
	"io"
	"log"
	"os"
	"testingReact/middleware"
	"testingReact/route"

	"testingReact/initializers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnv()
	initializers.ConnectBlog()
	initializers.ConnectUser()
	initializers.SyncDB()
}

func main() {
	//creating router
	router := gin.New()

	//Using logger
	router.Use(gin.Logger())

	//creating log file
	f, err := os.Create("logFile.log")
	if err != nil {
		log.Fatal(err)
		return
	}
	defer f.Close()
	gin.DefaultWriter = io.MultiWriter(f, os.Stdout)

	// CORS middleware with specific origin allowed
	router.Use(cors.New(middleware.Cors()))

	//creating routes
	route.Route(router)

	//running servering at :8000
	router.Run()
}
