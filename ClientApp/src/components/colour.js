

function Colour() {
    this.Red;
    this.Green;
    this.Blue;
    this.White;

    this.SetColour = function (red, green, blue, white) {
        this.SetRed(red);
        this.SetGreen(green);
        this.SetBlue(blue);
        this.SetWhite(white);
    }

    this.SetRed = function (value) {
        this.Red = ClampValue(value);
    }
    this.SetGreen = function (value) {
        this.Green = ClampValue(value);
    }
    this.SetBlue = function (value) {
        this.Blue = ClampValue(value);
    }
    this.SetWhite = function (value) {
        this.White = ClampValue(value);
    }

    this.ClampValue = function (value) {
        return Math.max(0, Math.min(value, 255));
    }
}