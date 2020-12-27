

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

const ColourTypes = {
    RGB: 'rgb',
    RGBW: 'rgbw'
};

const ArduinoTypes = {
    NORMAL: 'normal'
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
