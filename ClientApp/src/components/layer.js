
import React from 'react';
import { removeLayer } from '../store/layers';

export const Layer = ({ index, layer }) => {

    return (
        <div>
            <span>Index : {index}</span> <br />
            <span>Id : {layer.id}</span> <br />
            <span>Length : {layer.length}</span> <br />

            <input type="button" value="Remove Layer" onClick={() => removeLayer(layer)} />
        </div>
    );
}