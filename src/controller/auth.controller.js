const userService = require("../service/auth.service");
const jwt = require('jsonwebtoken');
async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        //  const token=await userService.signUp(name,email,password);
        //  res.cookie(token)
        const token = await userService.signUp(name, email, password);
        res.cookie(token)
        //const user = await userService.signUp(name, email, password);
        //   const token = await userService.signUp(name,email,password);
        // res.cookie(token)
        res.status(201).json({ message: "User Registered Successfully", token });
    }
    catch (err) {
        if (err.message === 'User is alerady registered') {
            res.status(400).json({ err: err.message });
        }
        else {
            res.status(500).json({ err: err.message });
        }
    }
}


async function login(req, res) {
    const { email, password } = req.body;
    try {
       
        const token = await userService.login(email, password);

        const result = await userService.login(email, password);
        if (token) {
            res.cookie('token',token);
         
           res.json(/* user: result.user,*/ token, /*status: 0*/ )
            
        } else {
            res.json({ error: "Invalid Login", status: 1 })
        }
    }
    catch (err) {
        if (err.message === "User not found") {
            res.status(404).json({ err: err.message });
        }
        else if (err.message === "Invalid Password") {
            res.status(401).json({ err: err.message });
        }
        else {
            res.status(500).json({ err: err.message });
        }
    }
}

 /*async function login(req,res)
 {
    try{
         const {email,password}=req.body;
         const token=userService.login(email,password)
         if(token){
            res.cookie('token',token, {httpOnly:true});
            res.status(200);
         }
         else
         {
            res.status(401);
         }

    }
    catch(err)
    {
        res.status(500).json({err:"Internal server error"})
    }
 }
*/
  async function getLogin(req,res)
  {
     try{
           const user=await userService.getLogin(req.params.userId);
           res.status(201).json(user);
     }
     catch(err)
     {
        res.status(500).json({err:err.message});
     }
  }

async function refreshToken(req, res) {
    const token = req.body.token;
    if (!token) {
        return res.status(401).json({ err: "No token" })
    }
    try {
        const refreshToken = userService.refreshToken(token);
        res.json({ message: "Token refreshed successfully", token: refreshToken })
    }
    catch (err) {
        res.status(500).json({ err: err.message });
    }
}

module.exports = {
    signUp,
    login,
    getLogin,
    refreshToken,

}