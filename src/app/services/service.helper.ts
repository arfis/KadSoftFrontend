import {HttpParams} from '@angular/common/http';

export function buildQuery(queryParams){
    let params = new HttpParams();
    params = params.set('page', String(queryParams.page));
    params = params.set('pageSize', String(queryParams.pageSize));
    if (queryParams.filter) {
        params = params.set('filters\[\]', `${queryParams.filterType}=${queryParams.filter}`);
    }
    if (queryParams.sort) {
        params = params.set('orderBy\[\]', `${queryParams.sort}=${queryParams.sortDirection.toLowerCase()}`);
    }
    if (queryParams.keyword) {
        params = params.set('find', queryParams.keyword);
    }
    if (queryParams.user && typeof queryParams.user === 'number') {
        params = params.set('filters\[\]=assignedTo', queryParams.user);
    }
    if (queryParams.webOnly) {
        params = params.set('filters\[\]=web', queryParams.webOnly);
    }
    if (queryParams.architect) {
        params = params.set('filters\[\]=architect', queryParams.architect);
    }
    return params;
}

export function mapToLabelValue(item) {
    item = {...item};
    item.value = item.id;
    item.label = item.name;

    return item;
}

export function normalizeToTypes(array) {
    return array.map(mapToLabelValue);
}