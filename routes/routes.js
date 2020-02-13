const express = require("express");
const middleware = require("../middleware/token");
const userController = require("../controller/userController");
const postController = require("../controller/postController");
const router = express.Router();

router.get("", middleware.verifyToken, postController.getDashboard);




//hit the function when user hit the url
router.get("/register", userController.getRegister);

//when user click submit button
router.post("/register", userController.register);

//hit the function when user hit the url
router.get("/login", userController.getLogin);

//if registered user hit this function
router.post("/login", userController.login);

//that is home page welcome @username is displayed
router.get("/dash", middleware.verifyToken, postController.getDashboard);

router.post("/post", middleware.verifyToken, postController.addPost);

//for viewing the added post by the logged user
router.get("/viewPost", middleware.verifyToken, postController.getPost);

//when user want to add post by html
router.get("/post", middleware.verifyToken, postController.getaddPost);

//that clear the login cookies
router.get("/logout", userController.logout);

module.exports = router;
