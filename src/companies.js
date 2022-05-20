'use strict';

class Companies {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/companies';

        this._api = api;
    };

    get(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'get',
                resource: `${this._HUDU_API_ENDPOINT}${
                    options.id ? `/${options.id}` : ''
                }`,
                params: options.params ? options.params : {},
                body: null,
            })
            : reject();
    };

    create(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'post',
                resource: this._HUDU_API_ENDPOINT,
                params: null,
                body: options.body ? options.body : {},
            })
            : reject();
    };

    update(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'put',
                resource: `${this._HUDU_API_ENDPOINT}${
                    options.id ? `/${options.id}` : ''
                }`,
                params: null,
                body: options.body ? options.body : {},
            })
            : reject();
    };

    delete(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'delete',
                resource: `${this._HUDU_API_ENDPOINT}${
                    options.id ? `/${options.id}` : ''
                }`,
                params: null,
                body: null,
            })
            : reject();
    };

    archive(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'put',
                resource: `${this._HUDU_API_ENDPOINT}${
                    options.id ? `/${options.id}` : '/archive'
                }`,
                params: null,
                body: null,
            })
            : reject();
    };

    unarchive(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'put',
                resource: `${this._HUDU_API_ENDPOINT}${
                    options.id ? `/${options.id}` : '/unarchive'
                }`,
                params: null,
                body: null,
            })
            : reject();
    };
}

export default Companies;