const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
  })

blogSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog