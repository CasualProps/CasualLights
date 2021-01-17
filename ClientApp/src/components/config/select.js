import * as React from 'react';
import { useState, useLayoutEffect } from "react";
import { connect } from 'react-redux';
import { selectValue } from '../../store/config';

export const Select = ({ options, variableName }) => {
    const [variable, setVariable] = useState(options);

    const handleSelectChange = (event) => {
        selectValue({ variable: variableName, value: variable[event.target.value] });
    }

    return (
        <select onChange={e => handleSelectChange(e)} className="form-control" id={variableName}>
            {
                Object.entries(variable)
                    .map(([key, value]) => <option value={key}>{value}</option>)
            }
        </select>
    );
}