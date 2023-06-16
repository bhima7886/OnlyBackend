const bookService = require("../service/book.service");

/*async function createBook(req, res) {
    try {
        const { title, authorId, publishedYear } = req.body;
        const book = await bookService.createBook(title, authorId, publishedYear);
        res.status(201).json(book);
    }
    catch (err) {
        res.status(201).json({ err: "Internal server error" });
    }
}*/
async function createBook(req,res)
{
    try{
        const book=await bookService.createBook(req.body);
        res.status(201).json(book);
        console.log(book)
    }
    catch(err)
    {
        res.status(500).json({err:"Internal server error"});
    }
}

async function getAllBooks(req,res) {
    try {
        const book = await bookService.getAllBooks();
        res.status(201).json(book);
        console.log(book);
    }
    catch (err) {
        res.status(500).json({ err: "Internal server error" });
    }
}


module.exports = {
    createBook,
    getAllBooks,
}