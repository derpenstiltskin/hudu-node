'use strict';

class Procedures {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/procedures';

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
}

export default Procedures;