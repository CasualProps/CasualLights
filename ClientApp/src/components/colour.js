import React from 'react';
import { SketchPicker } from 'react-color';

export default class ColourPicker extends React.Component {
    constructor(props) {
        super(props);

        this.Colour = props.Colour;
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    handleChangeComplete = (colour) => {
        this.props.Colour = colour.rgb;
    };

    render() {
        return (
            <SketchPicker
                color={this.props.Colour}
                onChangeComplete={this.handleChangeComplete}
                disableAlpha="true"
            />
        );
    }
}