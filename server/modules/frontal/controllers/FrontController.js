import path from 'path';

class FrontController {
    constructor () {
        console.log('front controller');
        this._viewPath = path.resolve(__dirname + '/../views');
    }

    getIndex (req, res) {
        res.render(this._viewPath + '/blog', {
            layout: false
        });
    }
}

module.exports = FrontController;