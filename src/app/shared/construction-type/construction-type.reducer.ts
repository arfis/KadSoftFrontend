import * as constructionTypeActions from './construction-type.actions';

export interface State {
    constructionTypes: any;
    parameters: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    constructionTypes: [],
    parameters: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: constructionTypeActions.Actions
): State {
    switch (action.type) {
        case constructionTypeActions.GET_CONSTRUCTION_TYPE:
            return {
                ...state,
                loading: true,
                error: null
            };

        case constructionTypeActions.GET_CONSTRUCTION_TYPE_SUCCESS:
            const constructionTypes = action.payload;

            return {
                ...state,
                constructionTypes: constructionTypes,
                loading: false,
                loaded: true,
                error: null
            };

        case constructionTypeActions.GET_CONSTRUCTION_TYPE_FAILURE:
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

export const getConstructionTypes = (state: State) => state.constructionTypes;
export const getConstructionTypesLoading = (state: State) => state.loading;
export const getConstructionTypesLoaded = (state: State) => state.loaded;
export const getConstructionTypesError = (state: State) => state.error;
