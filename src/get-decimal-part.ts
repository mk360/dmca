function getDecimalPart(number: number) {
    let numberWithoutIntegers = number - (number << 0);

    while (numberWithoutIntegers !== numberWithoutIntegers << 0) {
        numberWithoutIntegers *= 10;
    }

    return numberWithoutIntegers;
};

export default getDecimalPart;
