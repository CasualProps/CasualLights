import { useState, useLayoutEffect } from "react";
import { store } from "./store";
import * as Constants from '../constants/constants';
import defaultChannels from '../default/channels';
import defaultLayer from '../default/layer';
const storeKey = "layers";

// DEFINITIONS
const getUniqueId = list =>
    list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 1;

const initialState = [
    {
        ...defaultLayer,
        id: 1
    }
];

const reducers = {
    addLayer: (list, payload) => [...list, { ...payload, id: getUniqueId(list) }],
    removeLayer: (list, payload) => list.filter(layer => layer.id !== payload.id)
};

// HELPERS
const getState = () => store.getState()[storeKey];

const subscribe = f => {
    let lastState = getState();
    return store.subscribe(
        () => lastState !== getState() && f((lastState = getState()))
    );
};

// EXPORTS
export const useLayers = () => {
    const [state, setState] = useState(getState());
    useLayoutEffect(() => subscribe(setState), [setState]);
    return state;
};

export const addLayer = item =>
    store.dispatch({ type: "addLayer", payload: item });
export const removeLayer = item =>
    store.dispatch({ type: "removeLayer", payload: item });

// INJECT-REDUCERS INTO REDUX STORE
store.injectReducer(storeKey, (state = initialState, { type, payload }) =>
    reducers[type] ? reducers[type](state, payload) : state
);