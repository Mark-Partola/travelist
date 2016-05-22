import Sequelize from 'sequelize';
import configFull from '../config/config';

const config = (process.env.NODE_ENV)
            ? configFull.development
            : configFull.production;

class BaseModel {

    constructor () {

        if (BaseModel._instanse) {
            return BaseModel._instanse;
        }

        this._mapper = Sequelize;

        this._connection = new this._mapper(
            config.db.dbname,
            config.db.user,
            config.db.pass,
            {
                host: config.db.host,
                dialect: config.db.type,
                logging: console.log
            }
        );

        this._connection.authenticate()
            .then(() => {
                console.log('Connect Established');
            })
            .catch((err) => {
                console.error(`Connect error: ${err}`);
            });

        BaseModel._instanse = this;
    }
}

module.exports = BaseModel;