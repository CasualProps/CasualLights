
import { Layer } from '../components/layer';

const initialState = [new Layer()];

export default function layerReducer(state = initialState, action) {
    switch (action.type) {
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