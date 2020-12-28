
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