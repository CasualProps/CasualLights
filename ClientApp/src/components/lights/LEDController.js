import * as React from 'react';
import { useState, useLayoutEffect } from "react";
import { connect } from 'react-redux';
import { LED } from './LED';
import { useConfig } from '../../store/config';

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