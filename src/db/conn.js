const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/student-record",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successfull")
}).catch((e)=>{
    console.log("No connection");
})