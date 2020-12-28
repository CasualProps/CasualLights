import * as React from 'react';
import { connect } from 'react-redux';
import Layer from './layer';

class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.Length = props.Length;
        this.CurrentTime = props.CurrentTime;
        this.StepLength = props.StepLength;
        this.Layers = props.Layers;

        this.handleChange = this.handleChange.bind(this);
        this.addLayer = this.addLayer.bind(this);
    }

    handleChange(event) {
        this.props.selectFromList({ variable: this.variable, value: event.target.value });
    }

    addLayer() {
        this.props.addLayerAction({});
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.Layers.map((_value, index) => {
                            return <Layer Index={index}/>
                        })
                    }
                </ul>
                <input type="button" value="Add Layer" onClick={this.addLayer} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addLayerAction: payload => dispatch({ type: "timeline-add-layer", payload })
    };
}

function mapStateToProps(state) {
    return {
        Length: state.timeline.Length,
        CurrentTime: state.timeline.CurrentTime,
        StepLength: state.timeline.StepLength,
        Layers: state.layers
    };
}

const Timeline = connect(mapStateToProps, mapDispatchToProps)(TimelineComponent);

export default Timeline;