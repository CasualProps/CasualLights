import * as React from 'react';
import { connect } from 'react-redux';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.options = props.options;
        this.label = props.label;
        this.variable = props.variable;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.selectFromList({ variable: this.variable, value: event.target.value });
    }

    render() {
        return (
            <label>
                { this.label }:
                <select value={this.props.value} onChange={this.handleChange}>
                    {
                        Object.entries(this.options)
                            .map(([key, value]) => <option value={value}>{value}</option>)
                    }
                </select>
                <div>
                    Selected value = {this.props.value }
                </div>
            </label>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectFromList: payload => dispatch({ type: "config-select-fromList", payload })
    };
}

function mapStateToProps(state, ownProps) {
    return {
        value: state.config[ownProps.variable]
    };
}

const SelectInput = connect(mapStateToProps, mapDispatchToProps)(Select);

export default SelectInput;