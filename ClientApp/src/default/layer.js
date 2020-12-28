
import * as Constants from '../constants/constants';
import { Channels } from '../components/channels';

const defaultLayer = {
    Length: 1000,
    BlendingMode: Constants.BlendingModes.ADDITIVE,
    Visible: true,
    Channels: new Channels(Constants.ColourTypes.RGB),
    Points: []
};

export default defaultLayer;