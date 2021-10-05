import { StrGenerate } from "../str.generate";

describe('Text Generator Test', () => {
    it('should generate random string', () => {
        expect(StrGenerate.companyCode('0', 'PT. Sukamaju Sekali', )).toBe('SUK01');
        expect(StrGenerate.companyCode('0','PT. ABC')).toBe('ABC01');
        expect(StrGenerate.companyCode('ABC02','PT. ABC')).toBe('ABC03');
        expect(StrGenerate.companyCode('NIX04','PT. NIXCANTIK SEKALI')).toBe('NIX05');
        expect(StrGenerate.companyCode('NIX04','NIXCANTIK SEKALI')).toBe('NIX05');
    });
}); 