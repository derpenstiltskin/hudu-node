'use strict';

class Relations {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/relations';

        this._api = api;
    };

    get(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'get',
                resource: this._HUDU_API_ENDPOINT,
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
}

export default Relations;