const express=require("express");
const router=express.Router();
const controller=require("../controller/book.controller");

router.post("/book/add-book",controller.createBook);
router.get("/book/get-book",controller.getAllBooks);

module.exports=router;
