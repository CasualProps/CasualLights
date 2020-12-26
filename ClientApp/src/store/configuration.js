
import { createStore } from 'redux';
import * as Constants from '../constants/constants';

const initialState = {
    config: {
        BlendingMode: Constants.BlendingModes.ADDITIVE,
        AnimationType: Constants.AnimationTypes.CHASE
    }
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case 'config-select-fromList':
            return {
                ...state,
                config: {
                    ...state.config,
                    [action.payload.variable]: action.payload.value
                }
            };
        default:
            return state
    }
}

export const Store = createStore(configReducer);