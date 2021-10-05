export  class TextGenerator {
    static companyCode(text: string) {
        const length = text.length;
        const code = text.replace(/PT.|CV.|MV.|UD.| |/g, "")
                    .substring(0, 3)
                    .toUpperCase();
        const companyCode = code + (length > 9 ? length : ("0" + length));
        
        return companyCode;
    }
}