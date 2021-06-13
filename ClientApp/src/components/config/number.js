import * as React from 'react';
import { useState } from "react";
import { selectValue } from '../../store/config';

export const NumberInput = ({ defaultValue, variableName }) => {
    const [variable, setVariable] = useState(defaultValue);

    const handleChange = (event) => {
        setVariable(event.target.valueAsNumber);
        selectValue({ variable: variableName, value: event.target.valueAsNumber });
    }

    return (
        <input type="number" min="0" onChange={e => handleChange(e)} value={variable} className="form-control" id={variableName} />
    );
}