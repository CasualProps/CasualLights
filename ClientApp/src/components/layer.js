
import * as Constants from '../constants/constants';

function Layer() {
    this.Length = 1000;
    this.BlendingMode = BlendingModes.ADDITIVE;
    this.Visible = true;
    this.Channels = new Channels(ColourTypes.RGB);
    this.Points = [];
}


function Channels(colourType) {
    this.Red = this.IsRedEnabled(colourType);
    this.Green = this.IsGreenEnabled(colourType);
    this.Blue = this.IsBlueEnabled(colourType);
    this.White = this.IsWhiteEnabled(colourType);

    this.IsRedEnabled = function (colourType) {
        return colourType.includes('r');
    }
    this.IsGreenEnabled = function (colourType) {
        return colourType.includes('g');
    }
    this.IsBlueEnabled = function (colourType) {
        return colourType.includes('b');
    }
    this.IsWhiteEnabled = function (colourType) {
        return colourType.includes('w');
    }
}