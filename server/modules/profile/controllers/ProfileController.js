import path from 'path';

class FrontController {
    constructor () {
        console.log('index controller');
        this._viewPath = path.resolve(__dirname + '/../views');
    }

    getProfile (req, res) {
        res.render(this._viewPath + '/profile', {
            username: req.params.name,
            layout: this._viewPath + '/index'
        });
    }
}

module.exports = FrontController;