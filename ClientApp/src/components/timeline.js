import * as React from 'react';
import { connect } from 'react-redux';
import { Layer } from './layer';
import { addLayer, useLayers } from '../store/layers';
import defaultLayer from '../default/layer';

export const Timeline = () => {
    const layers = useLayers();

    return (
        <div>
            <ul>
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