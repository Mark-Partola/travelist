class BlogController {
    constructor () {
        this._article = new (require('./../models/Article'))();
    }

    getArticles (req, res) {
        this._article.model.create({
            title: 'Demo' + Math.random(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt error facilis harum libero omnis quas veniam. Asperiores consequuntur eos et eveniet officiis optio quod similique. Ex iste magni nostrum officia.',
            author_id: Math.round(Math.random() * 100)
        }).catch((err) => {
            console.log(err);
        });

        res.send('Тут будут статьи');
    }
}

module.exports = BlogController;