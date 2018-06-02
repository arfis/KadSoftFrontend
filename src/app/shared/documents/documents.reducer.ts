import * as documentActions from './documents.actions';
import {mapToLabelValue} from '../../services/service.helper';

export interface State {
    documents: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    documents: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: documentActions.Actions
): State {
    switch (action.type) {
        case documentActions.GET_DOCUMENTS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case documentActions.GET_DOCUMENTS_SUCCESS:
            const documents = action.payload;

            return {
                ...state,
                documents,
                loading: false,
                loaded: true,
                error: null
            };

        case documentActions.GET_DOCUMENTS_FAILURE:
            const errorMsg = action.payload;

            return {
                ...state,
                loading: false,
                loaded: false,
                error: errorMsg
            };

        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getDocuments = (state: State) => state.documents;
export const getDocumentsLoading = (state: State) => state.loading;
export const getDocumentsLoaded = (state: State) => state.loaded;
export const getDocumentsError = (state: State) => state.error;
