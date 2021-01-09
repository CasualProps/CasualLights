import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Select } from './components/select';
import { Timeline } from './components/timeline';
import * as Constants from './constants/constants';

ReactDOM.render(
    <div>
        <Select options={Constants.ColourTypes} variableName="colourType" />
        <Select options={Constants.ArduinoTypes} variableName="arduinoType" />
    </div>
    , document.getElementById("sidebar"));

ReactDOM.render(<Timeline />, document.getElementById("root"));
