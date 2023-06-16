const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../model/auth");

const secretkey="signuplogin";

async function signUp(name,email,password)
{
    try{
        const hashPassword=await bcrypt.hash(password,10);
        const user=new User({name,email,password:hashPassword});
      //const token=await jwt.sign({userId: user._id},secretkey,{expiresIn:"7d"})
      //  console.log(token);
      const token =await jwt.sign({userId:user._id,name:user.name,email:user.email,password:email.password},secretkey,{expiresIn:"7d"})
      const userVer=await jwt.verify(token,secretkey);
      console.log("userverify token ",userVer)
       await user.save();

      const duplicateUser=await User.findOne({email});
      if(duplicateUser){
         console.log("User is alerady registered");
      }
       //const userVer=await jwt.verify(token,secretkey);
       // console.log("UserVerify token",userVer);*/
     
      return {user,token};
       
    }   catch(err)
    {
        console.log(err)
    }
}

async function login(email,password){
    try{
        const user=await User.findOne({email});
        if(!user){
            console.log("User not found");
        }
        const isvalidPassword=await bcrypt.compare(password,user.password);
        if(!isvalidPassword){
            console.log("Invalid Password");
            return false;
        }
        const token=await jwt.sign({userId: user._id},secretkey,{expiresIn:"7d"})
        const userVerify=await jwt.verify(token,secretkey);
        console.log("UserVerify Token",userVerify)
        return {token};
    }
    catch(err)
    {
       console.log(err);
    }
}

/*async function login(email,password)
{
    try{
       const token=jwt.sign({email,password},secretkey);
       return token;
    }
    catch(err)
    {
        console.log(err);
    }
}
*/
async function getLogin(userId)
{
    try{
        const user=await User.findById(userId);
        return user;
    }
    catch(err)
    {
        console.log(err)
    }
}
async function refreshToken(token){
    try{
        const oldToken=jwt.verify(token,secretkey);
        const newToken=jwt.sign({userId:oldToken.userId},{
            expiresIn:'7d'
        });
        return newToken;
    }
    catch(err)
    {
        console.log("Invalid Token")
    }
}

module.exports={
    signUp,
    login,
    getLogin,
    refreshToken,

}