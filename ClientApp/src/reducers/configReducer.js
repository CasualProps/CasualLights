
import * as Constants from '../constants/constants';

const initialState = {
    BlendingMode: Constants.BlendingModes.ADDITIVE,
    AnimationType: Constants.AnimationTypes.CHASE
};

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case 'config-select-fromList':
            return {
                ...state,
                [action.payload.variable]: action.payload.value
            };
        default:
            return state;
    }
}