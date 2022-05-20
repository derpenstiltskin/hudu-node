'use strict';

class Expirations {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/expirations';

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
}

export default Expirations;