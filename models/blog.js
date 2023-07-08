const {model, Schema} = require('mongoose')

const blogSchema = new Schema (
  {
    title: String,
    content: String,
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
  }
  )

const Blog = model('Blog', blogSchema)
module.exports = Blog