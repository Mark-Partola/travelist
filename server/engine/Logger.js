const winston = require('winston');

class Logger {
	
	constructor (options) {
		this._transport = options.transport || 'console';
		this._pathToLog = options.path || './../logs/';
	}
	
	log (options) {
		
		if (!options.module) {
			throw new Error('Not given module')
		}

		this._fromModule = options.module;
		
		let path = this._fromModule.filename.split('/').slice(-2).join('/');

		return new winston.Logger({
			transports : [
				new winston.transports.Console({
					colorize:   true,
					level:      options.level || 'debug',
					label:      path
				})
			]
		});
	}
}

module.exports = Logger;