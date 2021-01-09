
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import configReducer from '../reducers/configReducer';
//import layerReducer from '../reducers/layerReducer';
import timelineReducer from '../reducers/timelineReducer';


export const Store = createStore(
    combineReducers(
        {
            config: configReducer,
            //layers: layerReducer,
            timeline: timelineReducer
        })
);