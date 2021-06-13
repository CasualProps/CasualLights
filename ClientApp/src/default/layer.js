
import * as Constants from '../constants/constants';
import defaultChannels from './channels';

const defaultLayer = {
    Length: 1000,
    BlendingMode: Constants.BlendingModes.ADDITIVE,
    Visible: true,
    Channels: defaultChannels
};

export default defaultLayer;