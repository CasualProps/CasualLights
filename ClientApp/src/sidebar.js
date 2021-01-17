import * as React from 'react';
import { Select } from './components/select';
import * as Constants from './constants/constants';

export const Sidebar = () => {
    return (
        <div>
            <h1>Config</h1>
            <Select options={Constants.ColourTypes} variableName="colourType" />
            <Select options={Constants.ArduinoTypes} variableName="arduinoType" />
        </div>
    );
}