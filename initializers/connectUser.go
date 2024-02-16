package initializers

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var CONNECTLOGIN *gorm.DB

func ConnectUser() {
	var err error
	dsn := os.Getenv("CONNECTLOGIN")

	CONNECTLOGIN, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
}
