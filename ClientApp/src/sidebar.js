import * as React from 'react';
import { NumberInput } from './components/number';
import { Select } from './components/select';
import { ExportContainer } from './components/export';
import * as Constants from './constants/constants';

export const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="config-container">
                <h1>Config</h1>
                <div class="form-group">
                    <label htmlFor="stripLength">Strip Length</label>
                    <NumberInput defaultValue="5" variableName="stripLength" />
                </div>


                <div class="form-group">
                    <label htmlFor="colourType">Colour Type</label>
                    <Select options={Constants.ColourTypes} variableName="colourType" />
                </div>

                <div class="form-group">
                    <label htmlFor="arduinoType">Arduino Type</label>
                    <Select options={Constants.ArduinoTypes} variableName="arduinoType" />
                </div>
            </div>
            <div className="export-container">
                <ExportContainer />
            </div>

        </div>
    );
}