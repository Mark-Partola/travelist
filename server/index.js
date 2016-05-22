import express from 'express';
import FrontController from './modules/frontal/controllers/FrontController';
import BlogController from './modules/blog/controllers/BlogController';
import ProfileController from './modules/profile/controllers/ProfileController';

let frontController = new FrontController(),
    blogController = new BlogController(),
    profileController = new ProfileController(),
    app = express();

global.config = {
    path: __dirname
};

/**
 * Шаблонизатор
 */
import exphbs from 'express-handlebars';
app.engine('.hbs', exphbs({defaultLayout: 'common', extname: '.hbs'}));
app.set('view engine', '.hbs');

/**
 * Доступ к статическим файлам
 */
app.use('/public', express.static(config.path + '/public'));
app.use('/node_modules', express.static(config.path + '/../node_modules'));

/**
 * Роутинг
 */
app.get('/', frontController.getIndex.bind(frontController));
app.get('/posts', blogController.getArticles.bind(blogController));
app.get('/user/:name', profileController.getProfile.bind(profileController));

app.listen(3000, function () {
    console.log('Server is running on localhost:3000');
});