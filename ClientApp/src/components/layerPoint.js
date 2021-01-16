import * as React from 'react';
import ColourPicker from './colour';
import * as Constants from '../constants/constants';
import { removeLayer } from '../store/layers';
import { removeLayerPoint, getLayerPoint, setLayerPointColour, useLayerPoints } from '../store/layerPoint';

export const LayerPoint = (layerPoint) => {
    const layerPointState = useLayerPoints();
    //const layerPoint = getLayerPoint(id);

    const handleColourChange = (colour) => {
        layerPoint.colour = colour.hex.replace('#', '');
        setLayerPointColour(layerPoint);
    };

    return (
        <div>
            <ColourPicker Colour={layerPoint.colour} upcateColour={handleColourChange} />
            <span>Colour: {layerPoint.colour}</span><br />
            <input type="button" value="Remove Layer Point" onClick={() => removeLayerPoint({ id: layerPoint.id })} />
        </div >
    );
}