const express = require('express')
const router = express.Router()
const Article = require('./../models/articles')


router.get('/new', (req, res) => {
    res.render('articles/new', {article : new Article()})
})

router.get('/:slug', async (req, res)=>{
    try{
        const reqArticle = await Article.findOne({slug : req.params.slug})
        if (reqArticle == null) res.send('find no article')
        res.render('articles/show', {article : reqArticle})
    }catch(e){
        console.log(e.message)
    }
}) 

router.get('/edit/:id', async (req, res)=>{
    try{
        const reqArticle = await Article.findById(req.params.id)
        if (reqArticle == null) res.send('find no article')
        res.render('articles/edit', {article : reqArticle})
    }catch(e){
        console.log(e.message)
    }
}) 

// router.post('/', async (req, res)=>{
//     let newArticle = new Article({
//         title: req.body.title,
//         description: req.body.description,
//         markdown: req.body.markdown
//     })
//     try{
//         savedArticle = await newArticle.save()
//         res.redirect(`/articles/${savedArticle.slug}`)
//     }catch(e){
//         console.log(e.message) // error message
//         res.render('articles/new', {article: newArticle}) // assign to /assigned 
//     }
// })

router.post('/', (req, res, next)=>{
    req.article = new Article()
    next()
}, saveAndRedirect(errorPath = 'new'))

router.put('/:id', async (req, res, next)=>{
    req.article = await Article.findById(req.params.id)
    next()
}, saveAndRedirect(errorPath = 'edit'))

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

// since put(edit) and post(create new) have the same steps: save and redirect,
// redirect to each path
function saveAndRedirect(errorPath){
    return async (req, res)=>{
        let article = req.article
        // overwrite with edit or new
        article.title = req.body.title
        article.description = req.body.description
        article.markdown = req.body.markdown
    
        try{
            savedArticle = await article.save()
            res.redirect(`/articles/${savedArticle.slug}`)
        }catch(e){
            console.log(e.message) // error message
            res.redirect(`/articles/${errorPath}`)
        }
    } 
}

module.exports = router