
const defaultColours = [
    { r: 0,   g: 0,   b: 0,   a:1 },
    { r: 100, g: 100, b: 100, a: 1 },
    { r: 200, g: 200, b: 200, a: 1 }
];

function getDefaultColour() {
    return 'FF00FF';
    //return defaultColours[Math.floor(Math.random() * defaultColours.length)];
};

export default getDefaultColour;