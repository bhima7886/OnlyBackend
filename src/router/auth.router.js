const express=require("express");
const router=express.Router();
const controller=require("../controller/auth.controller");

router.post("/user/signUp",controller.signUp);
router.post("/user/login",controller.login);
router.get("/users/:userId",controller.getLogin)
router.post("/user/refresh-token",controller.refreshToken)

module.exports=router;