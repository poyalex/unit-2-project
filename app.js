const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userroutes')
const blogRoutes = require('./routes/blogroutes')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)
app.use('/blogs', blogRoutes)
module.exports = app