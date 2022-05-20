'use strict';

class Activity_Logs {
    constructor(api = null) {
        this._HUDU_API_ENDPOINT = '/activity_logs';

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

export default Activity_Logs;