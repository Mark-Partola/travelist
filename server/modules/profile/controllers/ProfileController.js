import path from 'path';

class FrontController {
    constructor () {
        console.log('index controller');
        this._viewPath = path.resolve(__dirname + '/../views');
    }

    getProfile (req, res) {
        console.log(req.params.name);
        res.render(this._viewPath + '/profile', {
            layout: this._viewPath + '/index'
        });
    }
}

module.exports = FrontController;