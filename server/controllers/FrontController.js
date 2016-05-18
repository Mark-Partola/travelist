class FrontController {
    constructor () {
        console.log('front controller');
    }

    getIndex (req, res) {
        res.sendFile(config.path + '/views/index.html');
    }
}

module.exports = FrontController;