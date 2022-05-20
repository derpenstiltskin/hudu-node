'use strict';

class Assets {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/assets';

        this._api = api;
    };

    get(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'get',
                resource: `/companies${
                    options.company_id
                        ? `/${options.company_id}`
                        : ''
                }/assets${
                    options.id
                        ? `/${options.id}`
                        : ''
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
                resource: `/companies${
                    options.company_id ? `/${options.company_id}` : ''
                }/assets`,
                params: null,
                body: options.body ? options.body : {},
            })
            : reject();
    };

    update(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'put',
                resource: `/companies${
                    options.company_id ? `/${options.company_id}` : ''
                }/assets${options.id ? `/${options.id}` : ''}`,
                params: null,
                body: options.body ? options.body : {},
            })
            : reject();
    };

    delete(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'delete',
                resource: `/companies${
                    options.company_id ? `/${options.company_id}` : ''
                }/assets${options.id ? `/${options.id}` : ''}`,
                params: null,
                body: null,
            })
            : reject();
    };

    archive(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'put',
                resource: `/companies${
                    options.company_id ? `/${options.company_id}` : ''
                }/assets${options.id ? `/${options.id}` : ''}/archive`,
                params: null,
                body: null,
            })
            : reject();
    };

    unarchive(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'put',
                resource: `/companies${
                    options.company_id ? `/${options.company_id}` : ''
                }/assets${options.id ? `/${options.id}` : ''}/unarchive`,
                params: null,
                body: null,
            })
            : reject();
    };
}

export default Assets;