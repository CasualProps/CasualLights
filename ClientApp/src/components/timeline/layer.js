import React from 'react';
import * as Constants from '../../constants/constants';
import { removeLayer } from '../../store/layers';
import { LayerPoint } from './layerPoint';
import { addLayerPoint, getLayerPoints, useLayerPoints } from '../../store/layerPoint';
import defaultLayerPoint from '../../default/layerPoint';

export const Layer = ({ index, layer }) => {
    useLayerPoints();
    const layerPoints = getLayerPoints(layer.id);
    return (
        <div className="layer-container">
            <div className="layer-config">
                <div className="layer-name">{layer.id}</div>
                <div className="layer-icons">
                    <div className="layer-icon layer-blending">B</div>
                    <div className="layer-icon layer-channels">C</div>
                    <div className="layer-icon layer-remove" onClick={() => removeLayer(layer)}>X</div>

                </div>
            </div>
            <div className="layer-timeline">
                <span>Length : {layer.length}</span>
                {
                    layerPoints.map((layerPoint, index) => {
                        return <LayerPoint {...layerPoint} />
                    })
                }
            </div>

            <input type="button" value="Add Layer Point"
                onClick={() => addLayerPoint({
                    ...defaultLayerPoint,
                    layerId: layer.id
                })} />

        </div>
    );
}