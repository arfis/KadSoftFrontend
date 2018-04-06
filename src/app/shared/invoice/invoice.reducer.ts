import * as invoiceAction from './invoice.actions';

export interface State {
    invoices: any;
    parameters: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    invoices: {},
    parameters: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: invoiceAction.Actions
): State {
    switch (action.type) {
        case invoiceAction.GET_INVOICES:
            return {
                ...state,
                loading: true,
                error: null
            };

        case invoiceAction.GET_INVOICES_SUCCESS:
            const invoices = action.payload;

            return {
                ...state,
                invoices: invoices,
                loading: false,
                loaded: true,
                error: null
            };

        case invoiceAction.UPDATE_PARAMETERS:
            const parameters = action.payload;

            return {
                ...state,
                parameters
            };
        case invoiceAction.GET_INVOICES_FAILURE:
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

export const getInvoices = (state: State) => state.invoices;
export const getInvoicesLoading = (state: State) => state.loading;
export const getInvoicesLoaded = (state: State) => state.loaded;
export const getInvoicesError = (state: State) => state.error;
