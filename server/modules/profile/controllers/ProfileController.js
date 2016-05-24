import path from 'path';
import fs from 'fs';

class FrontController {
    constructor () {
        console.log('index controller');
        this._viewPath = path.resolve(__dirname + '/../views');
    }

    getProfile (req, res) {
        res.render(this._viewPath + '/profile', {
            username: req.params.name,
            map: fs.readFileSync(this._viewPath + '/partials/map.hbs'),
            layout: this._viewPath + '/index'
        });
    }
}

module.exports = FrontController;