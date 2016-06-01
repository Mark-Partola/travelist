const path = require('path');

class BlogController {
    constructor () {
        //this._article = new (require('./../models/Article'))();
        this._viewPath = path.resolve(__dirname + '/../views');
    }

    getArticles (req, res) {
        res.render(this._viewPath + '/blog', {
            layout: this._viewPath + '/index'
        });
    }

    getArticle (req, res) {
        res.render(this._viewPath + '/article', {
            layout: this._viewPath + '/index'
        })
    }
}

module.exports = BlogController;