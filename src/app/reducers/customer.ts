/**
 * Created by sevcik on 7/17/17.
 */
import {Customer} from "../pages/customer/user.model";
import * as customer from "../actions/customer";

export interface State {
    ids: string[] ;
    entities : Customer[] ;
    selectedCustomerId: string | null;
};

export const initialState: State = {
    ids: [],
    entities: [],
    selectedCustomerId: null,
};

export function reducer(state = initialState, action: customer.Actions ): State {
    switch (action.type) {

        case customer.LOAD: {
            const customers = action.payload;
            const newCustomers = customers.filter(customer => !state.entities[customer.id]);

            const newCustomerIds : string[] = newCustomers.map(customer => String(customer.id));
            // const newCustomerEntities = newCustomers.reduce((entities: { customers: Customer[] }, customer: Customer) => {
            //     return Object.assign(entities, {
            //         customer: customer
            //     });
            // }, {});

            return {
                ids: [ ...state.ids, ...newCustomerIds ],
                entities: newCustomers,
                selectedCustomerId: null
            };
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

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedCustomerId;

/*
export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});*/
