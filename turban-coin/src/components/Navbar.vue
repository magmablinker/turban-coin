<template>
    <div class="turban-navbar">
        <ul class="list-unstyled m-0 h-100 d-flex align-items-center justify-self-center">
            <li class="d-inline nav-item" @click="() => scrollTo('about')">
                {{ languageDto.getItem("about") }}
            </li>
            <li class="d-inline nav-item" @click="() => scrollTo('roadmap')">
                {{ languageDto.getItem("roadmap") }}
            </li>
            <li class="ms-auto">
                <div class="language-dropdown">
                    <div class="row justify-content-center align-items-center icon" @click="toggleLanguageDropdown">
                        <div class="col p-0 pe-1 icon">
                            {{ languageDto.currentLanguageLong }}
                        </div>
                        <div class="col p-0 pe-2 d-flex align-items-center">
                            <span class="material-icons">{{ showLanguageDropdown ? "expand_less" : "expand_more" }}</span>
                        </div>
                    </div>
                    <div class="language-dropdown-items" v-if="showLanguageDropdown">
                        <div class="language-dropdown-item" @click="() => setLanguage('en')">
                            English
                        </div>
                        <div class="language-dropdown-item" @click="() => setLanguage('de')">
                            Deutsch
                        </div>
                    </div>
                </div>
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
    private showLanguageDropdown = false;

    beforeMount(): void
    {
        this.languageDto = this._languageService.languageDto;
    }

    private scrollTo(id: string): void
    {
        const elem = document.getElementById(id);

        elem?.scrollIntoView({ behavior: "smooth" });
    }

    private setLanguage(language: string): void
    {
        this.languageDto.currentLanguage = language;
        this.toggleLanguageDropdown();
    }

    private toggleLanguageDropdown(): void
    {
        this.showLanguageDropdown = !this.showLanguageDropdown;
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

    .nav-item {
        margin-right: .5rem;
        transition: color .25s ease;
    }

    .nav-item:hover, .language-dropdown-item:hover {
        cursor: pointer;
        color: rgb(183, 190, 255);
        transition: color .25s ease;
    }

    .icon:hover {
        cursor: pointer;
    }

    .language-dropdown-items {
        position: absolute;
        padding: .5rem;
        background-color:rgba(44, 44, 44, 0.8);
        border-radius: .25rem;
        right: .5rem;
    }

    .language-dropdown-item {
        transition: color .25s ease;
        padding: .25rem;
    }
</style>