'use strict';

import https from 'https';

const HUDU_DEFAULT_PORT = '443';
const HUDU_BASE_PATH = '/api/v1/';

const HUDU_CONFIG_PROPERTIES = [
    'host',
    'key',
    'port',
];

class Hudu {
    constructor(apiOptions = {}) {
        const validApiOptions = this._validateApiOptions(apiOptions);

        this._api = {
            host: validApiOptions.host,
            key: validApiOptions.key,
            port: validApiOptions.port || HUDU_DEFAULT_PORT,
        };

        this._apiEndpoints = {
            activity_logs: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/activity_logs',
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
            },
            api_info: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/api_info',
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
            },
            articles: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/articles${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/articles',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/articles${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/articles${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: null,
                    };
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/articles${
                            options.id ? `/${options.id}` : ''
                        }/archive`,
                        params: null,
                        body: null,
                    };
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/articles${
                            options.id ? `/${options.id}` : ''
                        }/unarchive`,
                        params: null,
                        body: null,
                    };
                },
            },
            asset_layouts: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/asset_layouts${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/asset_layouts',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_layouts${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
            },
            asset_passwords: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/asset_passwords${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/asset_passwords',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_passwords${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/asset_passwords${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: null,
                    };
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_passwords${
                            options.id ? `/${options.id}` : ''
                        }/archive`,
                        params: null,
                        body: null,
                    };
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_passwords${
                            options.id ? `/${options.id}` : ''
                        }/unarchive`,
                        params: null,
                        body: null,
                    };
                },
            },
            assets: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/assets${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                getCompanyAssets: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/companies${
                            options.id ? `/${options.id}/assets` : '/assets'
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: `/companies${
                            options.company_id ? `/${options.company_id}` : ''
                        }/assets`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${
                            options.company_id ? `/${options.company_id}` : ''
                        }/assets${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/companies${
                            options.company_id ? `/${options.company_id}` : ''
                        }/assets${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: null,
                    };
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${
                            options.company_id ? `/${options.company_id}` : ''
                        }/assets${options.id ? `/${options.id}` : ''}/archive`,
                        params: null,
                        body: null,
                    };
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${
                            options.company_id ? `/${options.company_id}` : ''
                        }/assets${
                            options.id ? `/${options.id}` : ''
                        }/unarchive`,
                        params: null,
                        body: null,
                    };
                },
            },
            companies: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/companies${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/companies',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/companies${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: null,
                    };
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${
                            options.id ? `/${options.id}` : ''
                        }/archive`,
                        params: null,
                        body: null,
                    };
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${
                            options.id ? `/${options.id}` : ''
                        }/unarchive`,
                        params: null,
                        body: null,
                    };
                },
            },
            expirations: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/expirations',
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
            },
            folders: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/folders${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/folders',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/folders${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/folders${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: null,
                    };
                },
            },
            magic_dash: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/magic_dash',
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/magic_dash',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/magic_dash',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/magic_dash${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
            },
            procedures: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/procedures${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
            },
            relations: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/relations',
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/relations',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/relations${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
            },
            websites: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/websites${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: options.params ? options.params : {},
                        body: null,
                    };
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/websites',
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/websites${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: options.body ? options.body : {},
                    };
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/websites${
                            options.id ? `/${options.id}` : ''
                        }`,
                        params: null,
                        body: null,
                    };
                },
            },
        };
    }

    _validateApiOptions(apiOptions = {}) {
        const isObject = apiOptions === Object(apiOptions) && !Array.isArray(apiOptions);

        if (!isObject) {
            throw new Error('API Config must be an object');
        }

        const values = Object.keys(apiOptions).filter((value) => !HUDU_CONFIG_PROPERTIES.includes(value));

        if (values.length > 0) {
            throw new Error (`API Config may only contain the following: ${HUDU_CONFIG_PROPERTIES.join(', ')}`);
        }

        if (!apiOptions.host) {
            throw new Error('API Config must contain host value');
        }

        if (!apiOptions.key) {
            throw new Error('API Config must contain key value');
        }

        return apiOptions;
    }

    _sendApiRequest(endpoint = {}) {
        const self = this;

        return new Promise(function (resolve, reject) {
            let queryString = Object.keys(endpoint.params)
                .map((key) => key + '=' + endpoint[key])
                .join('&');

            if (queryString.length > 0) {
                queryString = `?${queryString}`;
            }

            const reqConfig = {
                host: self._api.host,
                path: `${HUDU_BASE_PATH}${endpoint.resource}${queryString}`,
                port: self._api.port || HUDU_DEFAULT_PORT,
                method: endpoint.method,
                headers: {
                    'x-api-key': self._api.key,
                    'Content-Type': 'application/json',
                },
            };

            const req = https.request(reqConfig, function (res) {
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

            if (endpoint.body) {
                req.write(endpoint.body);
            }

            req.end();
        });
    }

    activity_logs(method = '', options = {}) {
        return this._apiEndpoints.activity_logs[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.activity_logs[method](options)
              )
            : {};
    }

    api_info(method = '', options = {}) {
        return this._apiEndpoints.api_info[method]
            ? this._sendApiRequest(this._apiEndpoints.api_info[method](options))
            : {};
    }

    articles(method = '', options = {}) {
        return this._apiEndpoints.articles[method]
            ? this._sendApiRequest(this._apiEndpoints.articles[method](options))
            : {};
    }

    asset_layouts(method = '', options = {}) {
        return this._apiEndpoints.asset_layouts[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.asset_layouts[method](options)
              )
            : {};
    }

    asset_passwords(method = '', options = {}) {
        return this._apiEndpoints.asset_passwords[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.asset_passwords[method](options)
              )
            : {};
    }

    assets(method = '', options = {}) {
        return this._apiEndpoints.assets[method]
            ? this._sendApiRequest(this._apiEndpoints.assets[method](options))
            : {};
    }

    companies(method = '', options = {}) {
        return this._apiEndpoints.companies[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.companies[method](options)
              )
            : {};
    }

    expirations(method = '', options = {}) {
        return this._apiEndpoints.expirations[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.expirations[method](options)
              )
            : {};
    }

    folders(method = '', options = {}) {
        return this._apiEndpoints.folders[method]
            ? this._sendApiRequest(this._apiEndpoints.folders[method](options))
            : {};
    }

    magic_dash(method = '', options = {}) {
        return this._apiEndpoints.magic_dash[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.magic_dash[method](options)
              )
            : {};
    }

    procedures(method = '', options = {}) {
        return this._apiEndpoints.procedures[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.procedures[method](options)
              )
            : {};
    }

    relations(method = '', options = {}) {
        return this._apiEndpoints.relations[method]
            ? this._sendApiRequest(
                  this._apiEndpoints.relations[method](options)
              )
            : {};
    }

    websites(method = '', options = {}) {
        return this._apiEndpoints.websites[method]
            ? this._sendApiRequest(this._apiEndpoints.websites[method](options))
            : {};
    }
}

export default Hudu;
