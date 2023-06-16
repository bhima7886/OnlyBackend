const express=require("express");
const cors=require("cors");
require("../src/db/conn");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const router = require("./router/student.router");
const router1=require("./router/auth.router");
const router2=require("./router/book.router");
const router3=require("./router/author.router");
const verifyToken=require("./middleware/auth.middleware")




const app=express();
const PORT=3000;
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 
app.use(cors());
app.use(router);
app.use(router1);
app.use(router2);
app.use(router3);


app.use(cookieParser());
app.listen(PORT,()=>{
    console.log(`Server is running on port no ${PORT}`);
})
