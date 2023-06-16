const Author = require("../model/author");

async function createAuthor(authorData) {

  try {
    const author = new Author(authorData)
    await author.save();
    return author;
  }
  catch (err) {
    console.log(err)
  }
}

async function getAuthor() {
  try {
    const author = await Author.find();
    return author;

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  createAuthor,
  getAuthor
}