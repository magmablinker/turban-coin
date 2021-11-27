<template>
    <div class="row" id="about" style="min-height: 100vh;">
        <div class="col-12 col-md-6 mx-auto">
            <h4 class="display-4 m-0">{{ languageDto.getItem("about") }}</h4>
            <div class="row">
                 <div class="col-12">
                    <div class="turban-card turban-border p-2">
                        <div class="turban-card-header">
                            <h4 class="m-0 pb-1">{{ languageDto.getItem("whatAreWePlanning") }}</h4>
                        </div>
                        <div class="turban-card-body">
                            <div class="row p-2">
                                <div class="col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center align-items-center">
                                    <img src="/icon.png" alt="turban-icon" class="turban-icon">
                                </div>
                                <div class="col">
                                    <ul class="list-unstyled">
                                        <li class="mb-1">{{ languageDto.getItem("whatAreWePlanningText1") }}</li>
                                        <li class="mb-1">{{ languageDto.getItem("whatAreWePlanningText2") }}</li>
                                        <li class="mb-1">{{ languageDto.getItem("whatAreWePlanningText3") }}</li>
                                        <li class="mb-1">{{ languageDto.getItem("whatAreWePlanningText4") }}</li>
                                        <li class="mb-1">{{ languageDto.getItem("whatAreWePlanningText5") }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <div class="turban-card turban-border p-2">
                        <div class="turban-card-header">
                            <h4 class="m-0 pb-1">{{ languageDto.getItem("whoAreWe") }}</h4>
                        </div>
                        <div class="turban-card-body">
                            <div class="row p-2">
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center portrait-column mb-4 mb-md-0">
                                    <img src="/img/placeholder.jpeg" alt="developer" class="portrait-image">
                                    <h5 class="text-muted m-0">{{ languageDto.getItem("pmmaTitle") }}</h5>
                                    <p class="text-muted m-0">pmma_</p>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center portrait-column mb-4 mb-md-0">
                                    <img src="/img/placeholder.jpeg" alt="developer" class="portrait-image">
                                    <h5 class="text-muted m-0">{{ languageDto.getItem("forsaTitle") }}</h5>
                                    <p class="text-muted m-0">forsa</p>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center portrait-column">
                                    <img src="/img/placeholder.jpeg" alt="developer" class="portrait-image">
                                    <h5 class="text-muted m-0">{{ languageDto.getItem("faebTitle") }}</h5>
                                    <p class="text-muted m-0">fäb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <div class="turban-card turban-border p-2">
                        <div class="turban-card-header">
                            <h4 class="m-0 pb-0">{{ languageDto.getItem("whyAreWeDoingThisProject") }}</h4>
                        </div>
                        <div class="turban-card-body">
                            <h6 class="w-fit-content pb-1" style="border-bottom: 1px solid white !important;">
                                {{ languageDto.getItem("whyAreWeDoingThisProjectText1") }}
                            </h6>
                            <p class="m-0">
                                {{ languageDto.getItem("whyAreWeDoingThisProjectText2") }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <div class="turban-card turban-border p-2">
                        <div class="turban-card-header">
                            <h4 class="m-0 pb-0">{{ languageDto.getItem("whatAreOurPlansForTheFuture") }}</h4>
                        </div>
                        <div class="turban-card-body">
                            <p>
                                {{ languageDto.getItem("whatAreOurPlansForTheFutureText1") }}
                            </p>
                            <p>
                                {{ languageDto.getItem("whatAreOurPlansForTheFutureText2") }}
                            </p>
                            <p>
                                {{ languageDto.getItem("whatAreOurPlansForTheFutureText3") }}
                            </p>
                            <p class="m-0">
                                {{ languageDto.getItem("whatAreOurPlansForTheFutureText4") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import LanguageDto from "@/classes/dtos/LanguageDto";
import LanguageService from "@/services/language/LanguageService";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class About extends Vue
{
    @inject() private readonly _languageService!: LanguageService;
    private languageDto!: LanguageDto;
    
    beforeMount(): void
    {
        this.languageDto = this._languageService.languageDto;
    }

}
</script>

<style>
    .portrait-image {
        width: 100px;
        height: auto;
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    .portrait-column {
        flex-direction: column;
    }

    .turban-icon {
        width: 100px;
    }
</style>