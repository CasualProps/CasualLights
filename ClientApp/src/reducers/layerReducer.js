
import * as Constants from '../constants/constants';
import { Channels } from '../components/channels';
import { Colour } from '../components/colour';
import defaultLayer from '../default/layer';

const initialState = [defaultLayer];

function LayerPoint() {
    this.Position = 0;
    this.Colour = new Colour();
    this.Easing = Constants.Easings.LINEAR;
}

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
            return { ...state }; //update layer at index action.payload.layerIndex adding point at action.payload.layerPoint.
            //Maybe middleware to keep point order in ascending order from position ?
        case 'layer-remove-point':
            return { ...state }; //update layer at index action.payload.layerIndex removing point at action.payload.pointIndex
        case 'layer-update-point':
            return { ...state }; //update layer at index action.payload.layerIndex updating point at action.payload.pointIndex to action.payload.layerPoint
        default:
            return state;
    }
}