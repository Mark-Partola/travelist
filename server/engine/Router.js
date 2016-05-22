import config from './../config/config';
import path from 'path';

const cache = {};

class Router {
    constructor(app, options = {}) {
        this._app = app;
        this._options = options;

        this._routes = require(options.routesPath);
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
        let instance;

        return (req, res) => {
            const ctrl = require(path.join(
                config.common.local.rootPath,
                '/modules/',
                routeConfig.module,
                '/controllers/',
                routeConfig.controller
            ));

            if (this._options.cache) {
                if (!cache[ctrl]) {
                    cache[ctrl] = new ctrl;
                }

                instance = cache[ctrl];
            } else { 
                instance = new ctrl;
            }

            instance[routeConfig.action](req, res);
        }
    }
};

module.exports = Router;