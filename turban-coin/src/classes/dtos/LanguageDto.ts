export default class LanguageDto
{
    public languages: Record<string, Record<string, string>> = {};
    public currentLanguage = "en"

    public getItem(key: string): string
    {
        const notFoundText = `${key} not found for ${this.currentLanguage}`;

        if(!this.languages[key]) return notFoundText

        return this.languages[key][this.currentLanguage] ?? notFoundText;
    }

}