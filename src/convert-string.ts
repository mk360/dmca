function convertString(string: string) {
    const numericalRepresentation = parseInt(string, 32);

    return `${numericalRepresentation}.['toString'](32)`;
};

export default convertString;
