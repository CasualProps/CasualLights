import { useState, useLayoutEffect } from "react";
import { store } from "./store";
import * as Constants from '../constants/constants';
const storeKey = "config";

const initialState = {
    stripLength: 5,
    arduinoType: Constants.ArduinoTypes.NORMAL,
    colourType: Constants.ColourTypes.RGB
};

const reducers = {
    selectValue: (state, action) => ({ ...state, [action.variable] : action.value })
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
export const useConfig = () => {
    const [state, setState] = useState(getState());
    useLayoutEffect(() => subscribe(setState), [setState]);
    return state;
};

export const selectValue = item =>
    store.dispatch({ type: "selectValue", payload: item });

// INJECT-REDUCERS INTO REDUX STORE
store.injectReducer(storeKey, (state = initialState, { type, payload }) =>
    reducers[type] ? reducers[type](state, payload) : state
);