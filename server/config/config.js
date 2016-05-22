import path from 'path';

module.exports = {
    common: {
        local: {
            rootPath : path.resolve(__dirname + '/..')
        }
    },
    development: {
        db: {
            dbname : 'travelist',
            user   : 'root',
            pass   : '123',
            host   : 'localhost',
            type   : 'mysql'
        }
    },
    production: {
        
    }
};