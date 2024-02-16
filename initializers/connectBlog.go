package initializers

import (
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var CONNECTBLOG *gorm.DB

func ConnectBlog() {
	var err error
	dsn := os.Getenv("CONNECTBLOG")

	CONNECTBLOG, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
}
