const Book=require('../model/book');

 /*async function createBook(title,authorId,publishedYear)
{
    try{
        const book=new Book({title,author:authorId,publishedYear});
        await book.save();
        return book;
    }
    catch(err)
    {
        console.log(err);
    }
}*/

async  function createBook(bookData)
{
    const book=new Book(bookData);
    await book.save();
    return book;
}

async function getAllBooks()
{
    try{
         const book=await Book.find().populate('author');
         return book;
         console.log(book)
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={
    createBook,
    getAllBooks,
}