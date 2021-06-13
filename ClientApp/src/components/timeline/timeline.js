import * as React from 'react';
import defaultLayer from '../../default/layer';
import { addLayer, useLayers } from '../../store/layers';
import { Layer } from './layer';

export const Timeline = () => {
    const layers = useLayers();

    return (
        <div>
            <div className="timeline-header">
                <div className="timeline-sidebar">
                    Timeline sidebar
                </div>
                <div className="timeline-body">
                    Timeline body
                </div>
            </div>
            <ul className="layers-wrapper">
                {
                    layers.map((layer, index) => {
                        return <Layer index={index} layer={layer} />
                    })
                }
            </ul>
            <input type="button" value="Add Layer" onClick={() => addLayer(defaultLayer)} />
        </div>
    );
}