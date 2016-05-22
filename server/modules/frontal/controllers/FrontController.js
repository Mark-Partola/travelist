import path from 'path';

class FrontController {
    constructor () {
        console.log('front controller');
    }

    getIndex (req, res) {
        res.sendFile(path.resolve(__dirname + './../views/index.hbs'));
    }
}

module.exports = FrontController;