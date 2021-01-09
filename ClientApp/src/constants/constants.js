

const BlendingModes = {
    SUBTRACTIVE: 'subtractive',
    ADDITIVE: 'additive',
    OVERWRITE: 'overwrite'
};

const AnimationTypes = {
    CHASE: 'chase',
    FILL: 'fill',
    PULSE: 'pulse'
};

const ColourTypes = ['RGB', 'RGBW'];

const ArduinoTypes = {
    NORMAL: 'normal',
    MINI: 'mini'
};

const Easings = {
    LINEAR: 'linear'
};

const TimelineStates = {
    PLAYING: 'playing',
    PAUSED: 'paused',
    STOPPED: 'stopped'
}

module.exports = {
    AnimationTypes: AnimationTypes,
    BlendingModes: BlendingModes,
    ColourTypes: ColourTypes,
    ArduinoTypes: ArduinoTypes,
    Easings: Easings,
    TimelineStates: TimelineStates
};
