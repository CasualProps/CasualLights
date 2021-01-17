import * as React from 'react';
import { connect } from 'react-redux';
import { Layer } from '../timeline/layer';
import { addLayer, useLayers } from '../../store/layers';
import defaultLayer from '../../default/layer';

export const ExportContainer = () => {
    return (
        <div>
            <h1>Export Stuff</h1>
        </div>
    );
}