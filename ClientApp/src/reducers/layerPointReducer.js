
import defaultLayerPoint from '../default/layerPoint';

const initialState = [];


export default function layerPointReducer(state = initialState, action) {
    switch (action.type) {
        //update layer at index action.payload.layerIndex adding point at action.payload.layerPoint.
        //Maybe middleware to keep point order in ascending order from position ?
        case 'layer-add-point':
            return [
                ...state.slice(0, action.payload.layerIndex),
                {
                    ...state[action.payload.layerIndex],
                    Points: [
                        ...state[action.payload.layerIndex].Points,
                        defaultLayerPoint
                    ]
                },
                ...state.slice(action.payload.layerIndex + 1),
            ];
        //update layer at index action.payload.layerIndex removing point at action.payload.pointIndex
        case 'layer-remove-point':
            return [
                ...state.slice(0, action.payload.layerIndex),
                {
                    ...state[action.payload.layerIndex],
                    Points: state[action.payload.layerIndex].Points.filter((_val, i) => i !== action.payload.pointIndex)
                },
                ...state.slice(action.payload.layerIndex + 1),
            ];
        //update layer at index action.payload.layerIndex updating point at action.payload.pointIndex to action.payload.layerPoint
        case 'layer-update-point': return [
            ...state.slice(0, action.payload.layerIndex),
            {
                ...state[action.payload.layerIndex],
                Points: [
                    ...state[action.payload.layerIndex].Points.slice(0, action.payload.pointIndex),
                    action.payload.layerPoint,
                    ...state[action.payload.layerIndex].Points.slice(action.payload.pointIndex + 1),
                ]
            },
            ...state.slice(action.payload.layerIndex + 1),
        ]

        default:
            return state;
    }
}