import React from 'react';
import { SketchPicker } from 'react-color';

export default class ColourPicker extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <SketchPicker
                color={this.props.Colour}
                onChange={this.props.upcateColour}
                onChangeComplete={this.props.upcateColour}
                disableAlpha={true}
            />
        );
    }
}