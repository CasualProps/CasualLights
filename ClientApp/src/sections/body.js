import * as React from 'react';
import { Timeline } from '../components/timeline/timeline';
import { LEDController } from '../components/lights/LEDController';

export const Body = () => {
    return (
        <div className="content-wrapper">
            <div className="animation-container">
                <h1>Lights</h1>
                <LEDController />
            </div>
            <div className="timeline-container">
                <h1>Timeline</h1>
                <Timeline />
            </div>
        </div>
    );
}