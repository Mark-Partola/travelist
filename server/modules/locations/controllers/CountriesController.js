const path = require('path');

class CountriesController {
    constructor () {
        //this._article = new (require('./../models/Article'))();
        this._viewPath = path.resolve(__dirname + '/../views');
    }

    getAll (req, res) {
        res.render(this._viewPath + '/countries', {
            layout: this._viewPath + '/index'
        });
    }
}

module.exports = CountriesController;