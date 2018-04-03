import { createSelector } from 'reselect';
import { environment } from '../environments/environment';
import { ActionReducer, Action } from '@ngrx/store';

import { localStorageSync } from 'ngrx-store-localstorage';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromMatrices from './shared/matrix/matrix.reducer';
import * as fromTable from './component/matrix-search-table/matrix-search.reducer';
import * as fromDrawer from './shared/drawer/drawer.reducer';
import * as fromSettings from './shared/settings/settings.reducer';
import * as fromFeatures from './shared/features/features.reducer';
import * as fromSearch from './shared/search/search.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  orders: fromOrders.State;
  invoices: fromInvoices.State;
}

/**
 * Because metareducers take a reducer function fromRoot. State and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers = {
  orders: fromOrders.reducer,
  invoices: fromInvoices.reducer,
};

export const synchronizedReducers = ['orders', 'invoices'];
// const settingLocalStorageConfig = (reducer: ActionReducer<State>) => {
//   return localStorageSync({
//     keys: ['orders', 'invoices'],
//     rehydrate: true,
//     storage: localStorage
//   })(reducer);
// };

const developmentReducer: ActionReducer<State> = compose(
  storeFreeze,
  localStorageSync({
    keys: synchronizedReducers,
    rehydrate: true,
    storage: localStorage
  }),
  combineReducers
)(reducers);

const productionReducer: ActionReducer<State> = compose(
  localStorageSync({
    keys: synchronizedReducers,
    rehydrate: true,
    storage: localStorage
  }),
  combineReducers
)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/* selectors */
export const getState = (state: State) => state;
