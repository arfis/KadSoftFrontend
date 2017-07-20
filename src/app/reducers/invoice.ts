/**
 * Created by sevcik on 7/19/17.
 */
import * as invoice from "../actions/invoice";
import {Invoice} from "../pages/invoice/invoice.model";

export interface State {
    invoices : Invoice[] ;
    selectedInvoice: Invoice | null;
};

export const initialState: State = {
    invoices: [],
    selectedInvoice: null,
};

export function reducer(state = initialState, action: invoice.Actions ): State {
    switch (action.type) {

        case invoice.ADD_ALL_INVOICES_TO_TABLE: {
            const invoices = action.payload;

            return {
                invoices: invoices,
                selectedInvoice: null
            };
        }

        case invoice.LOAD_SUCCESS:{
            const customers = action.payload;

            return {
                invoices : customers,
                selectedInvoice : null
            };
        }

        case invoice.LOAD_INVOICE_SUCCESS:{
            const selectedInvoice = action.payload;

            return Object.assign({}, state, {
                selectedInvoice: selectedInvoice
            });
        }

        case invoice.SELECT: {
            return {
                invoices: state.invoices,
                selectedInvoice: action.payload
            };
        }

        case invoice.CREATE_SUCCESS:{
            const newCustomer = action.payload;

            return Object.assign({}, state, {
                invoices: [ ...state.invoices, newCustomer ]
            });
        }

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

export const getSelectedInvoice = (state: State) => state.selectedInvoice;

/*
 export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
 return entities[selectedId];
 });

 export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
 return ids.map(id => entities[id]);
 });*/
