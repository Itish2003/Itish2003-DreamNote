package middleware

import "github.com/gin-contrib/cors"

func Cors() cors.Config {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowCredentials = true
	return config
}
