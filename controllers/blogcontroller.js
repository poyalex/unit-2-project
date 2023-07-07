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

// router.post('/', blogController.createblog)
// req.user is the user that is logged in
exports.createBlog = async (req ,res) => {
    try {
        req.body.user = req.user._id
        const blog = await Blog.create(req.body)
        await req.user.save()
        res.json(blog)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

// router.post('/:id', blogController.updateblog)
exports.updateBlog = async (req, res) => {
    try {
        const update = Object.keys(req.body)
        const toDo = await Blog.findOne({_id: req.params.id})
        update.forEach(update => toDo[update] = req.body[update])
        await toDo.save()
        res.json({message: 'Item Updated'})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

// router.delete('/:id', blogController.deleteBlog)
exports.deleteBlog = async (req, res) => {
    try{
        const blog = await Blog.findOne({_id: req.params.id})
        blog.deleteOne()
        res.json({message: 'Blog Deleted'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}