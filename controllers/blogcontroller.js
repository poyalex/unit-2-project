const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// router.get('/', blogController.listblog)
exports.listBlog = async (req, res) => {
    try{
        if (!post) {
            throw new Error()
        }
        const listBlogs = await Blog.find({})
        res.json({
            blogs: listBlogs,
        })
    } catch (error) {
        res.status(421).json({message: error.message})
    }
}

// router.post('/', blogController.createblog)
exports.createBlog = async (req ,res) => {
    try {
        req.body.user = req.params.find
        const blog = await post.create(req.body)
        await req.user.save()
        res.json(blog)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
// router.post('/:id', blogController.updateblog)
// exports.updateblog = async (req, res) => {

// }
// router.delete('/:id', blogController.deleteBlog)