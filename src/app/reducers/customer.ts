/**
 * Created by sevcik on 7/17/17.
 */
import {Customer} from "../pages/customer/user.model";
import * as customer from "../actions/customer";

export interface State {
    customers : Customer[] ;
    selectedCustomer: Customer | null;
};

export const initialState: State = {
    customers: [],
    selectedCustomer: null,
};

export function reducer(state = initialState, action: customer.Actions ): State {
    switch (action.type) {

        case customer.ADD_ALL_CUSTOMERS_TO_TABLE: {
            const customers = action.payload;

            return {
                customers: customers,
                selectedCustomer: null
            };
        }

        case customer.LOAD_SUCCESS:{
            const customers = action.payload;

            return {
                customers : customers,
                selectedCustomer : null
            };
        }

        case customer.CREATE_SUCCESS:{
            const newCustomer = action.payload;

            console.log("trying to create customer2");
            console.log(newCustomer);
            return Object.assign({}, state, {
                customers: [ ...state.customers, newCustomer ]
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

export const getCustomers = (state: State) => state.customers;

export const getSelectedCustomer = (state: State) => state.selectedCustomer;

/*
export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});*/
