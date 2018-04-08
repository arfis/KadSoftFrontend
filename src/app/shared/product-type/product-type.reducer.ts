import * as productTypeActions from './product-type.actions';

export interface State {
    productTypes: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    productTypes: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: productTypeActions.Actions
): State {
    switch (action.type) {
        case productTypeActions.GET_PRODUCT_TYPES:
            return {
                ...state,
                loading: true,
                error: null
            };

        case productTypeActions.GET_PRODUCT_TYPES_SUCCESS:
            const productTypes = action.payload;

            return {
                ...state,
                productTypes: productTypes,
                loading: false,
                loaded: true,
                error: null
            };

        case productTypeActions.GET_PRODUCT_TYPES_FAILURE:
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

export const getProductTypes = (state: State) => state.productTypes;
export const getProductTypesLoading = (state: State) => state.loading;
export const getProductTypesLoaded = (state: State) => state.loaded;
export const getProductTypesError = (state: State) => state.error;
