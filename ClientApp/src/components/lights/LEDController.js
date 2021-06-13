import * as React from 'react';
import { useConfig } from '../../store/config';
import { LED } from './LED';

export const LEDController = () => {
    const state = useConfig();

    const getLights = () => {
        let lights = [];
        for (var i = 0; i < state.stripLength; i++) {
            lights.push(<LED />);
        }  

        return lights;
    }

    return (
        <div className="led-container">
            {getLights()}
        </div>
    );
}