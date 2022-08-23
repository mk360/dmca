import convertString from '../../src/convert-string';

describe("convert-string", () => {
    it('should convert mixed strings', () => {
        const string = "Become one of our Patrons now! Book an office at +1 54 232 542!";
        const converted = convertString(string);
        const int32Output = parseInt(string, 32);
        expect(converted).toEqual(`${int32Output}.['toString'](32)`);
    });
});
