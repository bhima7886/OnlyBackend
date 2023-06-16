const express=require("express");
const router=express.Router();
const controller=require("../controller/author.controller");

router.post("/author/add-record",controller.createAuthor);
router.get("/author/get-author",controller.getAuthor);

module.exports=router;