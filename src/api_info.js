'use strict';

class Api_Info {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/api_info';

        this._api = api;
    };

    get(options = {}) {
        return this._api._isValidApiResourceRequest(options)
            ? this._api._sendApiRequest({
                method: 'get',
                resource: this._HUDU_API_ENDPOINT,
                params: options.params ? options.params : {},
            })
            : reject();
    };
}

export default Api_Info;