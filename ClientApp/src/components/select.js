
import * as React from 'react';
import { useState, useLayoutEffect } from "react";
import { connect } from 'react-redux';
import { selectValue } from '../store/config';


export const Select = ({ options, variableName }) => {
    //const options = useSelect();
    const [variable, setVariable] = useState(options);

    const handleSelectChange = (event) => {
        console.log(variable[event.target.value]);
        selectValue({ variable: variableName, value: variable[event.target.value]});
    }

    return (
        <select onChange={e => handleSelectChange(e)}>
            {
                Object.entries(variable)
                    .map(([key, value]) => <option value={key}>{value}</option>)
            }
        </select>
    );
}