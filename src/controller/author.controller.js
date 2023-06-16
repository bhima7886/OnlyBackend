const authorService=require("../service/author.service");

async function createAuthor(req,res)
{
    try{
        const author=await authorService.createAuthor(req.body);
        res.status(201).json(author);
     
        console.log(req.body)
    }
    catch(err)
    {
        res.status(500).json({err:"Internal server error"});
    }
}
async function getAuthor(req,res)
{
    try{
        const author=await authorService.getAuthor();
        console.log(author);
        res.status(201).json(author);
   
    }
    catch(err)
    {
        res.status(500).json({err:"Internal Server error"});
    }
}

module.exports={
    createAuthor,
    getAuthor
}