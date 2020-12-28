

function Colour() {
    this.Red = 0;
    this.Green = 0;
    this.Blue = 0;
    this.White = 0;

    this.SetColour = function (red, green, blue, white) {
        this.SetRed(red);
        this.SetGreen(green);
        this.SetBlue(blue);
        this.SetWhite(white);
    }

    this.SetRed = function (value) {
        this.Red = this.ClampValue(value);
    }
    this.SetGreen = function (value) {
        this.Green = this.ClampValue(value);
    }
    this.SetBlue = function (value) {
        this.Blue = this.ClampValue(value);
    }
    this.SetWhite = function (value) {
        this.White = this.ClampValue(value);
    }

    this.ClampValue = function (value) {
        return Math.max(0, Math.min(value, 255));
    }
}