import * as Constants from '../constants/constants';
import getDefaultColour from './colour';


const defaultLayerPoint = {
    Position: 0,
    Colour: getDefaultColour(),
    Easing: Constants.Easings.LINEAR
};

export default defaultLayerPoint;