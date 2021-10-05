import { TextGenerator } from "../text.generator";

describe('Text Generator Test', () => {
    it('should generate random string', () => {
        expect(TextGenerator.companyCode('PT. Sukamaju Sekali').length).toBe(5);
        expect(TextGenerator.companyCode('PT. ABC').length).toBe(5);
    });
});