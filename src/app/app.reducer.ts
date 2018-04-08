import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromInvoice from './shared/invoice/invoice.reducer';
import * as fromOrder from './shared/order/order.reducer';
import * as fromProfession from './shared/profession-type/profession-type.reducer';
import * as fromConstructionType from './shared/construction-type/construction-type.reducer';
import * as fromProductType from './shared/product-type/product-type.reducer';
import * as fromRoles from './shared/roles/roles.reducer';

import {localStorageSync} from 'ngrx-store-localstorage';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    invoice: fromInvoice.State;
    order: fromOrder.State;
    profession: fromProfession.State;
    constructionType: fromConstructionType.State,
    productType: fromProductType.State,
    roles: fromRoles.State
    // router: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */

const settingLocalStorageConfig = (reducer: ActionReducer<State>) => {
    return localStorageSync({
        keys: ['invoice','order', 'professions', 'constructionType', 'productType','roles'],
        rehydrate: true,
        storage: localStorage
    })(reducer);
};

export const reducers: ActionReducerMap<State> = {
    invoice: fromInvoice.reducer,
    order: fromOrder.reducer,
    profession: fromProfession.reducer,
    constructionType: fromConstructionType.reducer,
    productType: fromProductType.reducer,
    roles: fromRoles.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        return reducer(state, action);
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze, settingLocalStorageConfig]
    : [];

/**
 * Layout Reducers
 */
export const getInvoiceState = createFeatureSelector<fromInvoice.State>('invoice');
export const getOrdersState = createFeatureSelector<fromOrder.State>('order');
export const getProfessionsState = createFeatureSelector<fromProfession.State>('profession');
export const getConstructionTypeState = createFeatureSelector<fromConstructionType.State>('constructionType');
export const getProductTypeState = createFeatureSelector<fromProductType.State>('productType');
export const getRolesState = createFeatureSelector<fromRoles.State>('roles');

export const getInvoices = createSelector(
    getInvoiceState,
    fromInvoice.getInvoices
);

export const getOrders = createSelector(
    getOrdersState,
    fromOrder.getOrders
);

export const getProfessions = createSelector(
    getProfessionsState,
    fromProfession.getProfessions
)

export const getConstructionTypes = createSelector(
    getConstructionTypeState,
    fromConstructionType.getConstructionTypes
)

export const getProductTypes = createSelector(
    getProductTypeState,
    fromProductType.getProductTypes
)

export const getRoles = createSelector(
    getRolesState,
    fromRoles.getRoles
)