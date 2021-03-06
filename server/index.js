const express = require('express');

const app = express();

const Logger = require('./engine/Logger');

global.config = {
    path: __dirname,
	logger: new Logger({})
};

const path = require('path');

/**
 * Шаблонизатор
 */
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'common', extname: '.hbs'}));
app.set('view engine', '.hbs');

/**
 * Доступ к статическим файлам
 */
app.use('/public', express.static(config.path + '/public'));
app.use('/node_modules', express.static(config.path + '/../node_modules'));

/**
 * Роутер
 */
const Router = require('./engine/Router');

const router = new Router(app, {
    cache: true,
    routesPath: path.resolve(__dirname + '/config/routes')
});

router.start();

app.listen(3000, function () {
    console.log('Server is running on localhost:3000');
});