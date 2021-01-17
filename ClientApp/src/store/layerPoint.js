import { useState, useLayoutEffect } from "react";
import { store } from "./store";
import * as Constants from '../constants/constants';
import defaultChannels from '../default/channels';
import defaultLayer from '../default/layer';
const storeKey = "layerPoints";


// DEFINITIONS
const getUniqueId = list =>
    list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 1;

const exampleLayerPoint = {
    id: 1,
    layerId: 1,
    index: 1,
    position: 100,
    colour: "FF0000",
    easing: Constants.Easings.LINEAR
};

const initialState = [];

const reducers = {
    addLayerPoint: (list, payload) => [...list, { ...payload, id: getUniqueId(list) }],
    removeLayerPoint: (list, payload) => list.filter(layer => layer.id !== payload.id),
    updateLayerPoint: (list, payload) => updateObjectInArray(list, payload)
};

function updateObjectInArray(list, payload) {
    return list.map((item, index) => {
        if (item.id !== payload.id) {
            return item
        }

        return {
            ...item,
            ...payload
        }
    });
}

// HELPERS
const getState = () => store.getState()[storeKey];

const subscribe = f => {
    let lastState = getState();
    return store.subscribe(
        () => lastState !== getState() && f((lastState = getState()))
    );
};

// EXPORTS
export const useLayerPoints = () => {
    const [state, setState] = useState(getState());
    useLayoutEffect(() => subscribe(setState), [setState]);
    return state;
};

export const addLayerPoint = item =>
    store.dispatch({ type: "addLayerPoint", payload: item });
export const removeLayerPoint = item =>
    store.dispatch({ type: "removeLayerPoint", payload: item });
export const updateLayerPoint = item =>
    store.dispatch({ type: "updateLayerPoint", payload: item });

export const getLayerPoints = id =>
    store.getState()[storeKey].filter(layerPoint => layerPoint.layerId === id);

export const getLayerPoint = id =>
    store.getState()[storeKey].find(layerPoint => layerPoint.id === id);

// INJECT-REDUCERS INTO REDUX STORE
store.injectReducer(storeKey, (state = initialState, { type, payload }) =>
    reducers[type] ? reducers[type](state, payload) : state
);