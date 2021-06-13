import * as React from 'react';
import ColourPicker from './colour';
import { removeLayerPoint, updateLayerPoint } from '../../store/layerPoint';

export const LayerPoint = (layerPoint) => {

    const handleColourPick = (colour) => {
        var newColour = colour.hex.replace('#', '');
        updateLayerPoint({ ...layerPoint, colour: newColour, active: false });
    };

    const handleColourChange = (colour) => {
        var newColour = colour.hex.replace('#', '');
        updateLayerPoint({ ...layerPoint, colour: newColour });
    };

    const toggleColourPicker = () => {
        updateLayerPoint({ ...layerPoint, active: !layerPoint.active });
    }

    const ColorPicker = () => {
        if (layerPoint.active) {
            return <ColourPicker Colour={layerPoint.colour} updateColour={handleColourChange} pickColour={handleColourPick} />
        }
        return null;
    }

    return (
        <div>
            <div className="layerpoint-colorpicker" onClick={() => toggleColourPicker()}>
                <ColorPicker />
            </div>
            <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                Popover on top
</button>
            <span>Colour: {layerPoint.colour}</span><br />
            <input type="button" value="Remove Layer Point" onClick={() => removeLayerPoint({ id: layerPoint.id })} />
        </div>
    );
}