const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8081, () => console.log('Testing on PORT 8081'))
const Blog = require('../models/blog')
const User = require ('../models/user')

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })

afterAll(async ()=>{
  await mongoose.connection.close()
  mongoServer.stop() 
  server.close()
})

describe('Test the blog endpoints', ()=>{

  test('It should list all blogs', async ()=>{
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'test' })
    const token = await user.generateAuthToken()
    await user.save()

    const response = await request(app)
    .get('/blogs')
    .set(`Authorization`, `Bearer ${token}`)

    expect(response.body).toMatchObject({})
    expect(response.statusCode).toBe(200)
  })


  test('It should list one blog', async ()=>{
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'test' })
    const token = await user.generateAuthToken()
    await user.save()
    const blog = new Blog({title:'Johns Blog', content:'test', user: user._id})
    await blog.save()

    const response = await request(app)
    .get(`/blogs/${blog.id}`)
    .set(`Authorization`, `Bearer ${token}`)

    expect(response.body).toHaveProperty('user')
    expect(response.statusCode).toBe(200)
  })


  test('It should create a new blog', async ()=>{
    const user = new User({ name: 'Barry', email: 'Barry@example.com', password: 'test', blogs: []})
    const token = await user.generateAuthToken()
    await user.save()

    const response = await request(app)
    .post('/blogs')
    .set(`Authorization`, `Bearer ${token}`)
    .send({title:'Test', content:'Test', user: user._id})

    expect(response.body.title).toEqual('Test')
    expect(response.body.content).toEqual('Test')
    expect(response.body).toHaveProperty('user')
  })


  test('It should update a blog', async ()=>{
    const user = new User({ 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      password: 'test' })
    const token = await user.generateAuthToken()
    await user.save()

    const blog = new Blog({
      title:'Johns Blog', 
      content:'test', 
      user: user._id})
    await blog.save()

    user.blogs.addToSet(blog._id)
    await user.save() 

    const response = await request(app)
    .put(`/blogs/${blog._id}`)
    .set(`Authorization`, `Bearer ${token}`)
    .send({title: 'Updated', content: 'Updated', user: user._id})

    expect(response.statusCode).toBe(200)
    expect(response.body.title).toBe('Updated')
  })


  test('It should delete a blog', async ()=>{
    const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'test' })
    const token = await user.generateAuthToken()
    await user.save()
    const blog = new Blog({title:'Johns Blog', content:'test', user: user._id})
    await blog.save()

    const response = await request(app)
    .delete(`/blogs/${blog.id}`)
    .set(`Authorization`, `Bearer ${token}`)

    expect(response.body.message).toEqual('Blog Deleted')
  })

})

  