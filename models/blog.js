const mongoose = require('mongoose')
// const jwt = require('jsonwebtoken')

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    user: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
  },
  {timestamps:true}
  )

// blogSchema.methods.generateAuthToken = async function() {
//   const token = jwt.sign({ _id: this._id }, 'secret')
//   return token
// }

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog