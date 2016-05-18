import express from 'express';
import FrontController from './controllers/FrontController';
import BlogController from './controllers/BlogController';

let frontController = new FrontController(),
    blogController = new BlogController(),
    app = express();

global.config = {
    path: __dirname
};

app.use('/public', express.static(config.path + '/public'));
app.use('/node_modules', express.static(config.path + '/../node_modules'));

app.get('/', frontController.getIndex);
app.get('/posts', blogController.getArticles.bind(blogController))

app.listen(3000, function () {
    console.log('Server is running on localhost:3000');
});