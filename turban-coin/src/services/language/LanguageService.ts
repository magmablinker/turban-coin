import LanguageDto from "@/classes/dtos/LanguageDto";
import axios from "axios";
import { reactive } from "vue";

export default class LanguageService
{
    
    private _languageDto: LanguageDto = reactive(new LanguageDto());
    private _loaded = false;


    public get languageDto(): LanguageDto
    {
        // if(!this._loaded)
        //     axios.get("/language/language.json")
        //         .then((response: any) => {
        //             this._languageDto.languages = response.data as Record<string, Record<string, string>>;
        //             this._loaded = true;
        //         });

        return this._languageDto;
    }

}