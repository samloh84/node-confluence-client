const _ = require('lodash');
module.exports = class SpaceApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['space'], params, config);
    }

    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['space'], data, config);
    }

    createPrivate(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['space','_private'], data, config);
    }

    read(spaceId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['space', spaceId], params, config);
    }

    delete(spaceId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['space', spaceId], params, config);
    }

    update(spaceId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['space', spaceId], data, config);
    }

    listContent(spaceId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['space', spaceId, 'content'], params, config);
    }


    listContentWithType(spaceId,type, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['space', spaceId, 'content', type], params, config);
    }



    listProperties(spaceId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['space', spaceId, 'property'], params, config);
    }

    createProperty(spaceId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['space', spaceId, 'property'], data, config);
    }

    readProperty(spaceId, propertyKey, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['space', spaceId, 'property', propertyKey], params, config);
    }


    deleteProperty(spaceId, propertyKey, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['space', spaceId, 'property', propertyKey], params, config);
    }

    updateProperty(spaceId, propertyKey, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['space', spaceId, 'property', propertyKey], data, config);
    }


};

