<template>
    <div class="row" id="roadmap">
        <div class="col-12 col-md-6 mx-auto mt-2">
            <h4 class="display-4 m-0">Roadmap</h4>
            <p class="text-muted">
                {{ languageDto.getItem("roadmapSubTitle") }}
            </p>
            <div class="row">
                <Quarter title="2021 - Q4" 
                        :goals="[ languageDto.getItem('2021-Q4-1'), 
                                  languageDto.getItem('2021-Q4-2'), 
                                  languageDto.getItem('2021-Q4-3') ]" />
                <div class="connector-line"></div>
                <Quarter title="2022 - Q1"
                        :goals="[ languageDto.getItem('2022-Q1-1'), 
                                  languageDto.getItem('2022-Q1-2'),
                                  languageDto.getItem('2022-Q1-3') ]" />
                <div class="connector-line"></div>
                <Quarter title="2022 - Q2" 
                        :goals="[ languageDto.getItem('2022-Q2-1'), 
                                  languageDto.getItem('2022-Q2-2'), 
                                  languageDto.getItem('2022-Q2-3'), 
                                  languageDto.getItem('2022-Q2-4') ]"/>
                <div class="connector-line"></div>
                <Quarter title="2022 Q3"
                        :goals="[ languageDto.getItem('2022-Q3-1'), 
                                  languageDto.getItem('2022-Q3-2'), 
                                  languageDto.getItem('2022-Q3-3') ]" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Quarter from "@/components/Quarter.vue";
import LanguageService from "@/services/language/LanguageService";
import { inject } from "inversify-props";
import LanguageDto from "@/classes/dtos/LanguageDto";

@Options({
    components: {
        Quarter
    }
})
export default class Roadmap extends Vue
{

    @inject() private readonly _languageService!: LanguageService
    private languageDto!: LanguageDto;

    beforeMount(): void
    {
        this.languageDto = this._languageService.languageDto;
    }

}
</script>

<style scoped>
    .connector-line {
        margin: 0px;
        height: 100px;
        background-color: var(--main-fore-color);
        width: 2px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>