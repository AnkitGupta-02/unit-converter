import lengthConversions from '../utils/lengthUtils.js';
import temperatureConversions from '../utils/temperatureUtils.js';
import weightConversions from '../utils/weightUtils.js';

export function lengthConvert(value, from, to) {
    if(!value || !from|| !to){
        throw new Error(`Unsupported conversion value ${value}`);
    }
    
    return value * lengthConversions[from][to];
};


export function weightConvert(value, from, to) {
    if(!value || !from|| !to){
        throw new Error(`Unsupported conversion value ${value}`);
    }
    return value * weightConversions[from][to];
}

export function temperatureConvert(value, from, to) {
    if(!value || !temperatureConversions[from.toLowerCase()]|| !temperatureConversions[to.toLowerCase()]){
        throw new Error(`Unsupported conversion value ${value}`);
    }
    const convertFunction = temperatureConversions[from.toLowerCase()][to.toLowerCase()];
    return convertFunction(value);
}

