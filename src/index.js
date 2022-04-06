'use strict';

import axios from "axios";

class Hudu {
    constructor() { }

    async init(apiOptions = {}) {
        this._apiConfig = {
            uri: apiOptions.uri ? apiOptions.uri : '',
            key: apiOptions.key ? apiOptions.key : '',
            pageSize: apiOptions.pageSize ? apiOptions.pageSize : 25,
        };

        this._apiInstance = await axios.create({
            baseURL: this._apiConfig.uri,
            headers: {
                'x-api-key': this_apiConfig.key,
                'Content-Type': 'application/json',
            },
        });

        this._endpoints = {
            activity_logs: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/activity_logs',
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            api_info: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/api_info',
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            articles: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/articles${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            asset_layouts: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/asset_layouts${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            asset_passwords: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/asset_passwords${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            assets: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/assets${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            companies: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/companies${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            expirations: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/expirations',
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            folders: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/folders${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            magic_dash: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/magic_dash',
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            procedures: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/procedures${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            relations: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: '/relations',
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
            websites: {
                get: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/websites${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
            },
        };
    }

    async request(endpoint = {}) {
        const requestOptions = {
            method: endpoint.method,
            url: endpoint.resource,
            params: endpoint.params,
        };

        if (endpoint.body !== null) {
            requestOptions.data = endpoint.body;
        }

        const response = await this._apiInstance.request(requestOptions).catch(function (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error ', err.message);
            }
        });

        return response.data;
    }

    async activity_logs(method = '', options = {}) {
        const existingEndpoint = this._endpoints.activity_logs[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async api_info(method = '', options = {}) {
        const existingEndpoint = this._endpoints.api_info[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async articles(method = '', options = {}) {
        const existingEndpoint = this._endpoints.articles[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async asset_layouts(method = '', options = {}) {
        const existingEndpoint = this._endpoints.asset_layouts[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async asset_passwords(method = '', options = {}) {
        const existingEndpoint = this._endpoints.asset_passwords[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async assets(method = '', options = {}) {
        const existingEndpoint = this._endpoints.assets[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async companies(method = '', options = {}) {
        const existingEndpoint = this._endpoints.expirations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async expirations(method = '', options = {}) {
        const existingEndpoint = this._endpoints.expirations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async folders(method = '', options = {}) {
        const existingEndpoint = this._endpoints.folders[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async magic_dash(method = '', options = {}) {
        const existingEndpoint = this._endpoints.magic_dash[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async procedures(method = '', options = {}) {
        const existingEndpoint = this._endpoints.relations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async relations(method = '', options = {}) {
        const existingEndpoint = this._endpoints.relations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }

    async websites(method = '', options = {}) {
        const existingEndpoint = this._endpoints.websites[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return await this.request(endpoint);
        }
    }
}

export default new Hudu;