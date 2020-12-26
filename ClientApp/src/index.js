import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Constants from './constants/constants';

import SelectInput from './components/select';
import { Store } from './store/configuration';

/*
ReactDOM.render(
    <h1>Hello, world! {Constants.BlendingModes.ADDITIVE}</h1>,
    document.getElementById('root')
);
*/

/*
var selectElement = <Select value={Constants.BlendingModes.ADDITIVE} options={Constants.BlendingModes} label="Select a blending mode" />;

ReactDOM.render(
    selectElement,
    document.getElementById('root')
);*/


ReactDOM.render(
    <Provider store={Store}>
        <SelectInput variable="BlendingMode" value={Constants.BlendingModes.ADDITIVE} options={Constants.BlendingModes} label="Select a blending mode" />
        <SelectInput variable="AnimationType" value={Constants.AnimationTypes.CHASE} options={Constants.AnimationTypes} label="Select an animation type" />
    </Provider>,
    document.getElementById("root")
);