import { numbers, multipliers, units } from './constants';

export default new Proxy({}, {
    get(target, name) {
        return find(name);
    }
});

const isNumber = token => numbers[token] !== undefined;
const isMultiplier = token => multipliers[token] !== undefined;
const isUnit = token => units[token] !== undefined;

function parse(token) {
    if (isNumber(token)) {
        return { type: 'number', value: numbers[token] };
    }
    if (isMultiplier(token)) {
        return { type: 'multiplier', value: multipliers[token] };
    }
    if (isUnit(token)) {
        return { type: 'unit', value: units[token] };
    }
    throw new Error(`Could not parse expression ${token}.`);
}

function find(name) {
    const terms = name.split('_')
        .map(term => term.toUpperCase())
        .filter(term => term !== 'AND')
        .map(parse);

    let sum = 0;
    let partSum = 0;

    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];

        switch (term.type) {
            case 'number': {
                partSum += term.value;
                break;
            }
            case 'multiplier': {
                partSum = (partSum || 1) * term.value;
                break;
            }
            case 'unit': {
                sum = sum + partSum * term.value;
                partSum = 0;
                break;
            }
        }
    }

    return partSum + sum;
}
