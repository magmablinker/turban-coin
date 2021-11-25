export default class LanguageDto
{
    public languages: Record<string, Record<string, string>> = {
        "title": {
            "de": "Turban Coin",
            "en": "Turban Coin"
        },
        "roadmapSubTitle": {
            "de": "Wir wollen uns realistische und nicht übertriebene Ziele setzen. Aber wir greifen trotzdem nach den Sternen.",
            "en": "We want to set realistic and not over exaggerated goals. But we're shooting for the stars nonetheless."
        },
        "2021-Q4-1": {
            "de": "Veröffentlichung Webseite", 
            "en": "Website launch"
        },
        "2021-Q4-2": {
            "de": "Telegram, Twitter, Instagram", 
            "en": "Telegram, Twitter, Instagram"
        },
        "2021-Q4-3": {
            "de": "Veröffentlichung auf Pancakeswap",
            "en": "Launch on Pancakeswap"
        },
        "2022-Q1-1": {
            "de": "Erste Holder",
            "en": "Getting first holders"
        },
        "2022-Q1-2": {
            "de": "Beginnen mit Marketing",
            "en": "Starting marketing"
        },
        "2022-Q1-3": {
            "de": "Veröffentlichung des Online Shops und erster Produkte",
            "en": "Launching first products and online store"
        },
        "2022-Q2-1": {
            "de": "2'000+ Holder",
            "en": "2,000+ Holder"
        },
        "2022-Q2-2": {
            "de": "Listing auf CoinSniper, CMC und CoinGecko",
            "en": "Getting listed on CoinSniper, CMC and CoinGecko"
        },
        "2022-Q2-3": {
            "de": "Entwicklung erster Prototypen",
            "en": "Starting development of first prototypes"
        },
        "2022-Q2-4": {
            "de": "1'000'000 $ Marketcap",
            "en": "1,000,000 $ Marketcap"
        },
        "2022-Q3-1": {
            "de": "5'000+ Holder",
            "en": "5,000+ holders"
        },
        "2022-Q3-2": {
            "de": "Auflistung auf weiteren Handelsbörsen",
            "en": "Listing on other exchanges"
        },
        "2022-Q3-3": {
            "de": "Partnerschaften mit Influenzern",
            "en": "Influencer partnerships"
        },
    };
    
    public currentLanguage = "en"

    public getItem(key: string): string
    {
        const notFoundText = `${key} not found for ${this.currentLanguage}`;

        if(!this.languages[key]) return notFoundText

        return this.languages[key][this.currentLanguage] ?? notFoundText;
    }

}