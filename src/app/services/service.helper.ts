import {HttpParams} from '@angular/common/http';

export function buildQuery(queryParams){
    let params = new HttpParams();
    params = params.set('page', String(queryParams.page));
    params = params.set('pageSize', String(queryParams.pageSize));
    if (queryParams.filter) {
        params = params.set('filters\[\]', `${queryParams.filterType}=${queryParams.filter}`);
    }
    if (queryParams.sort) {
        params = params.set('orderBy\[\]', `${queryParams.sort}=${queryParams.sortDirection.toUpperCase()}`);
    }
    if (queryParams.keyword) {
        params = params.set('query', queryParams.keyword);
    }

    return params;
}