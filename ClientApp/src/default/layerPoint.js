import * as Constants from '../constants/constants';
import getDefaultColour from './colour';


const defaultLayerPoint = {
    layerId: 0,
    position: 0,
    colour: getDefaultColour(),
    easing: Constants.Easings.LINEAR
};

export default defaultLayerPoint;