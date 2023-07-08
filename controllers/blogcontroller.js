const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// router.get('/', blogController.listblog)
exports.listBlog = async (req, res) => {
    try{
        const blog = await Blog.find({})
        res.json({
            blogs: blog,
        })
    } catch (error) {
        res.status(421).json({message: error.message})
    }
}

// router.get('/:id', userController.auth, blogController.getblog)
exports.getBlog = async (req, res) => {
    try{
        const blog = await Blog.findOne({_id: req.params.id})
        res.json(blog)
    } catch (error) {
        res.status(421).json({message: error.message})
    }
}

exports.createBlog = async (req ,res) => {
    try {
        req.body.user = req.user._id
        const blog = await Blog.create(req.body)
        req.user.blogs?
        req.user.blogs.addToSet({_id: blog._id}):
        req.user.blogs = [{_id: blog._id}]
        await req.user.save()
        res.json(blog)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

// router.post('/:id', blogController.updateblog)
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.json(blog)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

// router.delete('/:id', blogController.deleteBlog)
exports.deleteBlog = async (req, res) => {
    try{
        const blog = await Blog.findOneAndDelete({_id: req.params.id})
        res.json({message: 'Blog Deleted'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}