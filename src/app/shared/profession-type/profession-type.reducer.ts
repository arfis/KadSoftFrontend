import * as professionActions from './profession-type.actions';
import {mapToLabelValue} from '../../services/service.helper';

export interface State {
    professions: any;
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: State = {
    professions: {},
    loading: false,
    loaded: false,
    error: null
};

export function reducer(
    state = initialState,
    action: professionActions.Actions
): State {
    switch (action.type) {
        case professionActions.GET_PROFESSIONS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case professionActions.GET_PROFESSIONS_SUCCESS:
            const professions = action.payload;
            console.log('got: ', professions);

            return {
                ...state,
                professions: professions,
                loading: false,
                loaded: true,
                error: null
            };

        case professionActions.GET_PROFESSIONS_FAILURE:
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

export const getProfessions = (state: State) => state.professions;
export const getProfessionsLoading = (state: State) => state.loading;
export const getProfessionsLoaded = (state: State) => state.loaded;
export const getProfessionsError = (state: State) => state.error;
