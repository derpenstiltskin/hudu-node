'use strict';

import https from 'https';
import resources from './resources.js';

/** Class representing a Hudu API wrapper instance */
class Hudu {
    /**
     * Creates a Hudu API wrapper instance
     * @param {object} options  - The configuration object to connect to a Hudu API instance
     * @param {string} config.host - The string containing the hostname for a Hudu API instance
     * @param {string} config.key - The string containing the API key for a Hudu API instance
     * @param {number} [config.port] - The optional number containing a port number if the Hudu API is not running on TCP port 443
     */
    constructor(options = {}) {
        this._HUDU_API_PORT = 443;
        this._HUDU_API_BASE_PATH = '/api/v1';
        this._HUDU_CONFIG_PROPERTIES = ['host', 'key', 'port'];
        this._HUDU_REQUEST_PROPERTIES = ['method', 'resource', 'params', 'body'];

        this._config = {
            host: options.host,
            key: options.key,
            port: options.port || this._HUDU_API_PORT,
        };

        for (const [key, value] of Object.entries(resources)) {
            this[key] = new value(this);
        }
    };

    _isValidApiRequest(req = {}) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    }

    _isValidApiResourceRequest(req = {}) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    }

    /**
     * Sends API request to the Hudu API
     * @private
     * @param {object} options - The configuration object for the API request
     * @param {string} options.method - The string containing the type of HTTPS request being sent.
     * @param {string} options.resource - The string containing the API resource.
     * @param {object} [options.params] - The optional object containing query string parameters and values.
     * @param {object} [options.body] - The optional object containing the body for PUT and POST requests.
     * @returns {Promise}
     */
    _sendApiRequest(options = {}) {
        const self = this;

        return new Promise(function (resolve, reject) {
            if (!self._isValidApiRequest(null)) {
                reject();
            }

            let queryString = '';

            if (options.params) {
                queryString = Object.keys(options.params)
                    .map((key) => key + '=' + options[key])
                    .join('&');

                if (queryString.length > 0) {
                    queryString = `?${queryString}`;
                }
            }

            const reqOptions = {
                host: self._config.host,
                path: `${self._HUDU_API_BASE_PATH}${options.resource}${queryString}`,
                port: self._config.port,
                method: options.method,
                headers: {
                    'x-api-key': self._config.key,
                    'Content-Type': 'application/json',
                },
            };

            const req = https.request(reqOptions, function (res) {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject(
                        new Error(`HTTP Status Code: ${res.statusCode}`)
                    );
                }

                let body = [];

                res.on('data', function (chunk) {
                    body.push(chunk);
                });

                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                    } catch (e) {
                        reject(e);
                    }

                    resolve(body);
                });
            });

            req.on('error', function (err) {
                reject(err);
            });

            if (options.body) {
                req.write(options.body);
            }

            req.end();
        });
    };
}

export default Hudu;
