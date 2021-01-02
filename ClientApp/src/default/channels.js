
import * as Constants from '../constants/constants';

const defaultChannels = {
    Red: Constants.ColourTypes.RGB.includes('r'),
    Green: Constants.ColourTypes.RGB.includes('g'),
    Blue: Constants.ColourTypes.RGB.includes('b'),
    White: Constants.ColourTypes.RGB.includes('w')
};

export default defaultChannels;