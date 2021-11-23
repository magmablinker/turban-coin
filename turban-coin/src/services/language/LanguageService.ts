import LanguageDto from "@/classes/dtos/LanguageDto";

export default class LanguageService
{
    
    private _languageDto!: LanguageDto;
    private _currentLanguage = "en";

    constructor(languageDto: LanguageDto)
    {
        this._languageDto = languageDto;
    }

    public getItem(key: string)
    {
        return this._languageDto.languages[key][this._currentLanguage] ?? `Missing key ${key} in language ${this._currentLanguage}`;
    }

}

interface LanguageServiceConstructor 
{
    new(languageDto: LanguageDto): LanguageService;
}

interface LanguageServiceFactory extends Function
{
    (languageDto: LanguageDto): LanguageService;
}

export { LanguageServiceConstructor, LanguageServiceFactory }