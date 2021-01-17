import React from 'react';
import * as Constants from '../../constants/constants';
import { removeLayer } from '../../store/layers';
import { LayerPoint } from './layerPoint';
import { addLayerPoint, getLayerPoints, useLayerPoints } from '../../store/layerPoint';

export const Layer = ({ index, layer }) => {
    useLayerPoints();
    const layerPoints = getLayerPoints(layer.id);
    return (
        <div>
            <span>Index : {index}</span> <br />
            <span>Id : {layer.id}</span> <br />
            <span>Length : {layer.length}</span> <br />

            <input type="button" value="Remove Layer" onClick={() => removeLayer(layer)} />

            {
                layerPoints.map((layerPoint, index) => {
                    return <LayerPoint {...layerPoint} />
                })
            }
            <input type="button" value="Add Layer Point"
                onClick={() => addLayerPoint({
                    layerId: layer.id,
                    position: 100,
                    colour: "FF00FF",
                    easing: Constants.Easings.LINEAR
                })} />

        </div>
    );
}