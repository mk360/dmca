import generateCharCodeMap from "./generate-charcode-map";
import getDecimalPart from "./get-decimal-part";

function convertNumber(number: number) {
    const integerPart = number << 0;

    if (integerPart !== number) {
        const decimal = getDecimalPart(number);

        return `+\`(${generateCharCodeMap(integerPart)}.${generateCharCodeMap(decimal)})\``;
    }

    return `+\`${generateCharCodeMap(integerPart)}\``;
};

export default convertNumber;
