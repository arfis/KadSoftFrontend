import * as rolesAction from './roles.actions';

export interface State {
    roles: any;
    parameters: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    roles: {},
    parameters: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: rolesAction.Actions
): State {
    switch (action.type) {
        case rolesAction.GET_ROLES:
            return {
                ...state,
                loading: true,
                error: null
            };

        case rolesAction.GET_ROLES_SUCCESS:
            const roles = action.payload;

            return {
                ...state,
                roles: roles,
                loading: false,
                loaded: true,
                error: null
            };

        case rolesAction.GET_ROLES_FAILURE:
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

export const getRoles = (state: State) => state.roles;
export const getRolesLoading = (state: State) => state.loading;
export const getRolesLoaded = (state: State) => state.loaded;
export const getRolesError = (state: State) => state.error;
