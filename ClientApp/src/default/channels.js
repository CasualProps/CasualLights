
import * as Constants from '../constants/constants';

export const Channels = {
    Red: Constants.ColourTypes.RGB.includes('r'),
    Green: Constants.ColourTypes.RGB.includes('g'),
    Blue: Constants.ColourTypes.RGB.includes('b'),
    White: Constants.ColourTypes.RGB.includes('w')
};
