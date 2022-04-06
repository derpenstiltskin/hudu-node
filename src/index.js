'use strict';

const axios = require('axios');

class Hudu {
    constructor() { }

    init(apiOptions = {}) {
        this._apiConfig = {
            uri: apiOptions.uri ? apiOptions.uri : '',
            key: apiOptions.key ? apiOptions.key : '',
            pageSize: apiOptions.pageSize ? apiOptions.pageSize : 1000,
        };

        this._apiInstance = axios.create({
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/articles',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/articles${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/articles${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: null,
                    }
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/articles${options.id ? `/${options.id}` : ''}/archive`,
                        params: null,
                        body: null,
                    }
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/articles${options.id ? `/${options.id}` : ''}/unarchive`,
                        params: null,
                        body: null,
                    }
                },
            },
            asset_layouts: {
                get: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_layouts${options.id ? `/${options.id}` : ''}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/asset_layouts',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_layouts${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/asset_passwords',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_passwords${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/asset_passwords${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: null,
                    }
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_passwords${options.id ? `/${options.id}` : ''}/archive`,
                        params: null,
                        body: null,
                    }
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/asset_passwords${options.id ? `/${options.id}` : ''}/unarchive`,
                        params: null,
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
                getCompanyAssets: (options = {}) => {
                    return {
                        method: 'get',
                        resource: `/companies${options.id ? `/${options.id}/assets` : '/assets'}`,
                        params: options.params ? options.params : {},
                        body: null,
                    }
                },
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: `/companies${options.company_id ? `/${options.company_id}` : ''}/assets`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${options.company_id ? `/${options.company_id}` : ''}/assets${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/companies${options.company_id ? `/${options.company_id}` : ''}/assets${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: null,
                    }
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${options.company_id ? `/${options.company_id}` : ''}/assets${options.id ? `/${options.id}` : ''}/archive`,
                        params: null,
                        body: null,
                    }
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${options.company_id ? `/${options.company_id}` : ''}/assets${options.id ? `/${options.id}` : ''}/unarchive`,
                        params: null,
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/companies',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/companies${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: null,
                    }
                },
                archive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${options.id ? `/${options.id}` : ''}/archive`,
                        params: null,
                        body: null,
                    }
                },
                unarchive: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/companies${options.id ? `/${options.id}` : ''}/unarchive`,
                        params: null,
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/folders',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/folders${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/folders${options.id ? `/${options.id}` : ''}`,
                        params: null,
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/magic_dash',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/magic_dash',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/magic_dash${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/relations',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/relations${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
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
                create: (options = {}) => {
                    return {
                        method: 'post',
                        resource: '/websites',
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                update: (options = {}) => {
                    return {
                        method: 'put',
                        resource: `/websites${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: options.body ? options.body : {},
                    }
                },
                delete: (options = {}) => {
                    return {
                        method: 'delete',
                        resource: `/websites${options.id ? `/${options.id}` : ''}`,
                        params: null,
                        body: null,
                    }
                },
            },
        };
    }

    request(endpoint = {}) {
        const requestOptions = {
            method: endpoint.method,
            url: endpoint.resource,
        };

        if (endpoint.params !== null) {
            requestOptions.params = endpoint.params;
        }

        if (endpoint.body !== null) {
            requestOptions.data = endpoint.body;
        }

        if (requestOptions.method == 'get') {
            requestOptions.params.page_size = this._apiConfig.pageSize;
            requestOptions.params.page = 1;
        }

        let processing = true;
        let responseData = [];

        while (processing) {
            const response = this._apiInstance.request(requestOptions).catch(function (err) {
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

            if (response.data) {
                responseData.push.apply(responseData, response.data);
            }

            if (((response.data[Object.keys(response.data)[0]].length == 0) && (response.data[Object.keys(response.data)[0]].length%1000 == 0)) || (requestOptions.method != 'get')) {
                processing = false;
            } else {
                requestOptions.params.page++;
            }
        }

        return responseData;
    }

    async activity_logs(method = '', options = {}) {
        const existingEndpoint = this._endpoints.activity_logs[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async api_info(method = '', options = {}) {
        const existingEndpoint = this._endpoints.api_info[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async articles(method = '', options = {}) {
        const existingEndpoint = this._endpoints.articles[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async asset_layouts(method = '', options = {}) {
        const existingEndpoint = this._endpoints.asset_layouts[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async asset_passwords(method = '', options = {}) {
        const existingEndpoint = this._endpoints.asset_passwords[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async assets(method = '', options = {}) {
        const existingEndpoint = this._endpoints.assets[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async companies(method = '', options = {}) {
        const existingEndpoint = this._endpoints.expirations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async expirations(method = '', options = {}) {
        const existingEndpoint = this._endpoints.expirations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async folders(method = '', options = {}) {
        const existingEndpoint = this._endpoints.folders[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async magic_dash(method = '', options = {}) {
        const existingEndpoint = this._endpoints.magic_dash[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async procedures(method = '', options = {}) {
        const existingEndpoint = this._endpoints.relations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async relations(method = '', options = {}) {
        const existingEndpoint = this._endpoints.relations[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    async websites(method = '', options = {}) {
        const existingEndpoint = this._endpoints.websites[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }
}

export default new Hudu;