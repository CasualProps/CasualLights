
import * as Constants from '../constants/constants';
import { Colour } from '../components/colour';
import defaultLayer from '../default/layer';
import layerPointReducer from './layerPointReducer';

const initialState = [defaultLayer];

export default function layerReducer(state = initialState, action) {
    switch (action.type) {
        case 'timeline-add-layer':
            return [
                ...state,
                defaultLayer
            ]; 
        case 'timeline-remove-layer':
            return state.filter((_val, i) => i !== action.payload.layerIndex); //remove layer at index action.payload.layerIndex

        case 'layer-update-channels':
            return { ...state }; //update layer at index action.payload.layerIndex changing channel to action.payload.channels
        case 'layer-update-visibility':
            return { ...state }; //update layer at index action.payload.layerIndex changing channel to action.payload.visible 
        case 'layer-update-order':
            return { ...state }; //update layer at index action.payload.layerIndex moving it to action.payload.targetIndex 

        case 'layer-add-point':
            return layerPointReducer(state, action);
        case 'layer-remove-point':
            return layerPointReducer(state, action);
        case 'layer-update-point':
            return { ...state }; //update layer at index action.payload.layerIndex updating point at action.payload.pointIndex to action.payload.layerPoint
        default:
            return state;
    }
}