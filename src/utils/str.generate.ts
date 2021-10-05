export  class StrGenerate {
    static companyAbbr(companyName: string): string {
        const abbr = companyName.replace(/[^A-Za-z]/g, '')
                    .replace(/PT|CV|MV|UD|/g, '')
                    .substring(0, 3)
                    .toUpperCase();
        return abbr;
    }

    static companyCode(lastcode: any, companyName: string): string {
        const lastID = parseInt(lastcode.substr(-2)) || 0;
        const nextID = lastID + 1;
        const companyCode = this.companyAbbr(companyName) + (nextID > 9 ? nextID : ('0' + nextID));
        return companyCode;
    }
}