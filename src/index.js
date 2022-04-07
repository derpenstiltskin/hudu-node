'use strict';

import axios from "axios";

class Hudu {
    constructor() { }

    init(apiOptions = {}) {
        this._apiConfig = {
            uri: apiOptions.uri ? `https://${apiOptions.uri}/api/v1` : '',
            key: apiOptions.key ? apiOptions.key : '',
        };

        this._apiInstance = axios.create({
            baseURL: this._apiConfig.uri,
            headers: {
                'x-api-key': this._apiConfig.key,
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
                        method: 'get',
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

    async _request(endpoint = {}) {
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
            
        return (response.data ? response.data : {});
    }

    async activity_logs(method = '', options = {}) {
        return (this._endpoints.activity_logs[method] ? this._request(this._endpoints.activity_logs[method](options)) : {});
    }

    async api_info(method = '', options = {}) {
        return (this._endpoints.api_info[method] ? this._request(this._endpoints.api_info[method](options)) : {});
    }

    async articles(method = '', options = {}) {
        return (this._endpoints.articles[method] ? this._request(this._endpoints.articles[method](options)) : {});
    }

    async asset_layouts(method = '', options = {}) {
        return (this._endpoints.asset_layouts[method] ? this._request(this._endpoints.asset_layouts[method](options)) : {});
    }

    async asset_passwords(method = '', options = {}) {
        return (this._endpoints.asset_passwords[method] ? this._request(this._endpoints.asset_passwords[method](options)) : {});
    }

    async assets(method = '', options = {}) {
        return (this._endpoints.assets[method] ? this._request(this._endpoints.assets[method](options)) : {});
    }

    async companies(method = '', options = {}) {
        return (this._endpoints.companies[method] ? this._request(this._endpoints.companies[method](options)) : {});
    }

    async expirations(method = '', options = {}) {
        return (this._endpoints.expirations[method] ? this._request(this._endpoints.expirations[method](options)) : {});
    }

    async folders(method = '', options = {}) {
        return (this._endpoints.folders[method] ? this._request(this._endpoints.folders[method](options)) : {});
    }

    async magic_dash(method = '', options = {}) {
        return (this._endpoints.magic_dash[method] ? this._request(this._endpoints.magic_dash[method](options)) : {});
    }

    async procedures(method = '', options = {}) {
        return (this._endpoints.procedures[method] ? this._request(this._endpoints.procedures[method](options)) : {});
    }

    async relations(method = '', options = {}) {
        return (this._endpoints.relations[method] ? this._request(this._endpoints.relations[method](options)) : {});
    }

    async websites(method = '', options = {}) {
        return (this._endpoints.websites[method] ? this._request(this._endpoints.websites[method](options)) : {});
    }
}

export default new Hudu;