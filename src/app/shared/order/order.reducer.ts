import * as orderActions from './order.actions';

export interface State {
    orders: any;
    parameters: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    orders: {},
    parameters: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: orderActions.Actions
): State {
    switch (action.type) {
        case orderActions.GET_ORDERS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case orderActions.GET_ORDERS_SUCCESS:
            const orders = action.payload;

            return {
                ...state,
                orders: orders,
                loading: false,
                loaded: true,
                error: null
            };

        case orderActions.UPDATE_PARAMETERS:
            const parameters = action.payload;

            return {
                ...state,
                parameters
            };
        case orderActions.GET_ORDERS_FAILURE:
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

export const getOrders = (state: State) => state.orders;
export const getOrdersLoading = (state: State) => state.loading;
export const getOrdersLoaded = (state: State) => state.loaded;
export const getOrdersError = (state: State) => state.error;
