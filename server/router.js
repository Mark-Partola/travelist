import config from './config/config';
import path from 'path';

const cache = {};

class Router {
    constructor(app, options) {
        this._app = app;
        this._options = options;
        this._routes = {
            '/' : {
                module: 'frontal',
                method: 'get',
                controller: 'FrontController',
                action: 'getIndex'
            },
            '/posts' : {
                module: 'blog',
                method: 'get',
                controller: 'BlogController',
                action: 'getArticles'
            },
            '/user/:name' : {
                module: 'profile',
                method: 'get',
                controller: 'ProfileController',
                action: 'getProfile'
            }
        }
    }

    start() {
        for (let route in this._routes) {
            if (!this._routes.hasOwnProperty(route)) { continue }

            let routeConfig = this._routes[route];

            this._app[routeConfig.method](
                route,
                this._loader(routeConfig)
            );
        }
    }

    _loader(routeConfig) {
        return (req, res) => {
            const ctrl = require(path.join(
                config.common.local.rootPath,
                '/modules/',
                routeConfig.module,
                '/controllers/',
                routeConfig.controller
            ));

            if (!cache[ctrl]) {
                cache[ctrl] = new ctrl;
            }

            cache[ctrl][routeConfig.action](req, res);
        }
    }
};

module.exports = Router;