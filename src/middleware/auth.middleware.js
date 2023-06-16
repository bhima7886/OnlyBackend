
const jwt=require("jsonwebtoken");
const User=require("../model/auth");

async function verifyToken(req,res,next)
{
    const secretkey="signuplogin";
    try
    {
        if(req.cookies){
        const token=req.cookies.token;
        console.log(token)
        if(token)
        {
            jwt.verify(token,secretkey,(err,decoded)=>
            {
                if(err)
                {
                    res.status(403);
                }
                else{
                    req.user=decoded;
                    next();
                }
            })
        }
        
        else
        {
            res.json({"status":"1","error":"Token not exist"})
        }
    } else{
        res.json({"status":"1","error":"Token not exist"})
        }
    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports={
    verifyToken
}

