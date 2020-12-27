
import { Timeline } from '../components/timeline';

const initialState = new Timeline();

export default function timelineReducer(state = initialState, action) {
    switch (action.type) {
        case 'timeline-add-layer':
            return { ...state }; //create a new empty layer
        case 'timeline-remove-layer':
            return { ...state }; //remove layer at index action.payload.layerIndex
        case 'timeline-update-length':
            return { ...state }; //set timeline.Length to action.payload.targetLength, include middleware to clamp all layer lengths to new timeline length
        case 'timeline-update-time':
            return { ...state }; //set timeline.CurrentTime to action.payload.targetTime
        case 'timeline-play':
            return { ...state }; //add subscription or something to update timeline.CurrentTime every frame and set timeline state
        case 'timeline-stop':
            return { ...state }; //remove play event and set timeline state
        case 'timeline-pause':
            return { ...state }; //set timeline.CurrentTime to action.payload.targetTime and set timeline state

        default:
            return state;
    }
}