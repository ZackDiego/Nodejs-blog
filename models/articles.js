const mongoose = require('mongoose')
const slugify = require('slugify')
const marked = require('marked') //convert markdown to html
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompourify = createDomPurify(new JSDOM().window) // create with JSDOM object and pourify it

const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml:{
        type: String,
        required: true
    }
})

articleSchema.pre("validate", function(next){
    if (this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    if (this.markdown){
        this.sanitizedHtml = dompourify.sanitize(marked.parse(this.markdown))
    }
    next()
})

module.exports = mongoose.model('Article', articleSchema)