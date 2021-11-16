const _ = require('lodash');
module.exports = class ContentApi {
    constructor(apiClient) {
        this._apiClient = apiClient;
    }

    list(params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['search'], params, config);
    }

    create(data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['content'], data, config);
    }

    read(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId], params, config);
    }


    delete(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['content', contentId], params, config);
    }

    update(contentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['content', contentId], data, config);
    }

    listHistory(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'history'], params, config);
    }

    getMacroBody(contentId, version, macroId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'history', version, 'macro', macroId], params, config);
    }

    listChildren(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'child'], params, config);
    }

    listChildrenOfType(contentId, type, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'child', type], params, config);
    }

    listComments(contentId, params, config) {
        return this.listChildrenOfType(contentId, 'comment', params, config);
    }


    createAttachments(contentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'content-type'], 'multipart/form-data');
        _.set(config, ['headers', 'X-Atlassian-Token'], 'nocheck');
        return apiClient._post(['content', contentId, 'child', 'attachment'], data, config);
    }

    listAttachments(contentId, params, config) {
        return this.listChildrenOfType(contentId, 'attachment', params, config);
    }


    updateAttachment(contentId, attachmentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['content', contentId, 'child', 'attachment', attachmentId], data, config);
    }


    updateAttachmentData(contentId, attachmentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        if (_.isNil(config)) {
            config = {};
        }
        _.set(config, ['headers', 'content-type'], 'multipart/form-data');
        _.set(config, ['headers', 'X-Atlassian-Token'], 'nocheck');
        return apiClient._post(['content', contentId, 'child', 'attachment', attachmentId], data, config);
    }

    listDescendants(contentId, params, config) {
        return this.listChildrenOfType(contentId, 'descendant', params, config);
    }

    listLabels(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'label'], params, config);
    }

    addLabels(contentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['content', contentId, 'label'], data, config);
    }

    deleteLabel(contentId, label, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['content', contentId, 'label', label], data, config);
    }

    listProperties(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'property'], params, config);
    }

    createProperty(contentId, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._post(['content', contentId, 'property'], data, config);
    }

    readProperty(contentId, propertyKey, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'property', propertyKey], params, config);
    }


    deleteProperty(contentId, propertyKey, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._delete(['content', contentId, 'property', propertyKey], params, config);
    }

    updateProperty(contentId, propertyKey, data, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._put(['content', contentId, 'property', propertyKey], data, config);
    }


    listRestrictionsByOperation(contentId, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'restriction', 'byOperation'], params, config);
    }

    listRestrictionsForOperation(contentId, operationKey, params, config) {
        let api = this;
        let apiClient = api._apiClient;
        return apiClient._get(['content', contentId, 'restriction', 'byOperation', operationKey], params, config);
    }

};

