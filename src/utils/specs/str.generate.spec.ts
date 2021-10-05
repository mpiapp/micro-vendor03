import { StrGenerate } from "../str.generate";

describe('Text Generator Test', () => {
    it('should generate random string', () => {
        expect(StrGenerate.companyCode('PT. Sukamaju Sekali').length).toBe(5);
        expect(StrGenerate.companyCode('PT. ABC').length).toBe(5);
    });
}); 