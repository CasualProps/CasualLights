import * as React from 'react';
import ColourPicker from './colour';
import { removeLayerPoint, updateLayerPoint } from '../store/layerPoint';

export const LayerPoint = (layerPoint) => {
    const handleColourChange = (colour) => {
        var newColour = colour.hex.replace('#', '');
        var k = { ...layerPoint, colour: newColour };
        updateLayerPoint(k);
    };

    return (
        <div>
            <ColourPicker Colour={layerPoint.colour} upcateColour={handleColourChange} />
            <span>Colour: {layerPoint.colour}</span><br />
            <input type="button" value="Remove Layer Point" onClick={() => removeLayerPoint({ id: layerPoint.id })} />
        </div>
    );
}