const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const Article = require('./models/articles')

// connect to DB
mongoose.connect('mongodb://localhost/blog')

// 讀取 EJS 檔案位置
app.set('views','./views');
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended : false})) //able to access all the data with req.body
app.use('/articles' ,articleRouter)

app.get('/', async (req, res) => {
    const allArticles = await Article.find().sort({createAt: 'desc'})
    res.render('articles/index', {allArticles: allArticles})
})

app.listen(3000)