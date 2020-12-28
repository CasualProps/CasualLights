﻿
import * as Constants from '../constants/constants';
import * as DefaultChannels from '../default/channels';

import * as React from 'react';
import { connect } from 'react-redux';

class LayerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.Index = props.Index;
        this.Length = props.Length;
        this.BlendingMode = props.BlendingMode;
        this.Visible = props.Visible;
        this.Channels = props.Channels;
        this.Points = props.Channels;

        this.removeLayer = this.removeLayer.bind(this);
    }

    removeLayer() {
        this.props.removeLayerAction({ layerIndex: this.props.Index});
    }

    render() {
        return (
            <div>
                <span>Index : {this.props.Index}</span> <br/>
                <span>Length : {this.props.Length}</span> <br/>

                <input type="button" value="Remove Layer" onClick={this.removeLayer} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeLayerAction: payload => dispatch({ type: "timeline-remove-layer", payload })
    };
}

function mapStateToProps(state, ownProps) {
    return {
        Length: state.layers[ownProps.Index].Length,
        BlendingMode: state.layers[ownProps.Index].BlendingMode,
        Visible: state.layers[ownProps.Index].Visible,
        Channels: state.layers[ownProps.Index].Channels,
        Points: state.layers[ownProps.Index].Points
    };
}

const Layer = connect(mapStateToProps, mapDispatchToProps)(LayerComponent);

export default Layer;