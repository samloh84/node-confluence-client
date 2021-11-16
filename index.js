const _ = require('lodash');
const {ApiClient} = require('api-client-base');
const ContentApi = require("./content");
const SpaceApi = require("./space");

module.exports = class ConfluenceApiClient extends ApiClient {
    constructor(params) {
        _.defaults(params, {basePath: '/rest/api/'});
        super(params);

        let apiClient = this;
        this.content = new ContentApi(apiClient);
        this.space = new SpaceApi(apiClient);
    }
}

