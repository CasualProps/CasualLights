import * as React from 'react';
import ColourPicker from './colour';

export default class LayerPoint extends React.Component {
    constructor(props) {
        super(props);

        this.LayerIndex = props.LayerIndex;
        this.Index = props.Index;
        this.Position = props.Position;
        this.Colour = props.Colour;
        this.Easing = props.Easing;

        this.removeLayerPoint = this.removeLayerPoint.bind(this);
    }

    removeLayerPoint() {
        this.props.RemoveLayerPointAction({ layerIndex: this.props.LayerIndex, pointIndex: this.props.Index });
    }

    updateLayerPoint() {
        this.props.UpdateLayerPointAction(
            {
                layerIndex: this.props.LayerIndex,
                pointIndex: this.props.Index
            }
        );
        
    }

    render() {
        return (
            <div>
                <div>
                    <span>Index : {this.props.Index}</span> <br />
                    <span>Position : {this.props.Position}</span> <br />
                    <span>Colour : {this.props.Colour.Red}, {this.props.Colour.Green}, {this.props.Colour.Blue} </span> <br />

                    <ColourPicker Colour="#FF00AAA" />
                    <input type="button" value="Remove Layer Point" onClick={this.removeLayerPoint} />
                </div>
            </div>
        );
    }
}