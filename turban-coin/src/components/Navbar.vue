<template>
    <div class="turban-navbar">
        <ul class="list-unstyled m-0 h-100 d-flex align-items-center justify-self-center">
            <li class="d-inline nav-item" @click="() => scrollTo('roadmap')">
                Roadmap
            </li>
            <li class="d-inline nav-item" @click="() => scrollTo('about')">
                About
            </li>
            <li class="ms-auto">
                <select name="language" id="language-select" class="p-1" v-model="languageDto.currentLanguage">
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import LanguageDto from "@/classes/dtos/LanguageDto";
import LanguageService from "@/services/language/LanguageService";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class Navbar extends Vue
{

    @inject() private readonly _languageService!: LanguageService;
    private languageDto!: LanguageDto;

    beforeMount(): void
    {
        this.languageDto = this._languageService.languageDto;
    }

    private scrollTo(id: string): void
    {
        const elem = document.getElementById(id);

        elem?.scrollIntoView({ behavior: "smooth" });
    }

    private onLanguageChange(change: any): void
    {
        console.log(change);
    }

}
</script>

<style>
    .turban-navbar {
        position: absolute;
        width: 100vw !important;
        height: 50px;
        left: 0;
        top: 0px;
        margin: 0px;
        background-color: rgba(44, 44, 44, 0.5);
    }

    #language-select, 
    #language-select:focus-visible, 
    #language-select:focus, 
    #language-select:active  {
        background-color: rgba(44, 44, 44, 0);
        color: white;
        border: 0px !important;
        outline: 0px !important;
    }

    #language-select option {
        background-color: rgba(44, 44, 44, 1);
    }

    .nav-item {
        margin-right: .5rem;
        transition: color .25s ease;
    }

    .nav-item:hover {
        cursor: pointer;
        color: rgb(183, 190, 255);
        transition: color .25s ease;
    }
</style>