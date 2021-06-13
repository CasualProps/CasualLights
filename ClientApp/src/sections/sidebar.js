import * as React from 'react';
import { NumberInput } from '../components/config/number';
import { Select } from '../components/config/select';
import { ExportContainer } from '../components/config/export';
import * as Constants from '../constants/constants';

export const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="config-container">
                <h1>Config</h1>
                <div className="form-group">
                    <label htmlFor="stripLength">Strip Length</label>
                    <NumberInput defaultValue="5" variableName="stripLength" />
                </div>


                <div className="form-group">
                    <label htmlFor="colourType">Colour Type</label>
                    <Select options={Constants.ColourTypes} variableName="colourType" />
                </div>

                <div className="form-group">
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