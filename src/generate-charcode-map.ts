import convertString from "./convert-string";

function generateCharCodeMap(number: number) {
    let numberToString = number.toString();
    const numberString = numberToString.split('').map(i => String.fromCharCode(+i)).join('');

    return `'${numberString}'[${convertString('split')}]('').map(d => d.charCodeAt(0)).join('')`;
};

export default generateCharCodeMap;
