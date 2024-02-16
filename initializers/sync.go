package initializers

import "testingReact/model"

func SyncDB() {
	CONNECTBLOG.AutoMigrate(&model.Blog{})
	CONNECTLOGIN.AutoMigrate(&model.User{})
}
