
import * as Constants from '../constants/constants';

export function Layer() {
    this.Length = 1000;
    this.BlendingMode = Constants.BlendingModes.ADDITIVE;
    this.Visible = true;
    this.Channels = new Channels(Constants.ColourTypes.RGB);
    this.Points = [];
}


export function Channels(colourType) {
    this.Red = IsRedEnabled(colourType);
    this.Green = IsGreenEnabled(colourType);
    this.Blue = IsBlueEnabled(colourType);
    this.White = IsWhiteEnabled(colourType);

    function IsRedEnabled(colourType) {
        return colourType.includes('r');
    }
    function IsGreenEnabled(colourType) {
        return colourType.includes('g');
    }
    function IsBlueEnabled(colourType) {
        return colourType.includes('b');
    }
    function IsWhiteEnabled(colourType) {
        return colourType.includes('w');
    }
}