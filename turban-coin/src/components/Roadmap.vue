<template>
    <div class="row">
        <div class="col-12 col-md-6 mx-auto mt-2">
            <h4 class="display-4 m-0">Roadmap</h4>
            <p class="text-muted">
                We want to set realistic and not over exaggerated goals. But we're shooting for the stars nonetheless.
            </p>
            <div class="row">
                <Quarter title="2021 - Q4" 
                        :goals="[ 'Website Launch', 
                                'Telegram, Twitter', 
                                'Launch on Pancakeswap' ]" />
                <div class="connector-line"></div>
                <Quarter title="2022 - Q1"
                        :goals="[ 'Getting first Holders', 
                                'Starting Marketing',
                                'Launching First Products and Online Store' ]" />
                <div class="connector-line"></div>
                <Quarter title="2022 - Q2" 
                        :goals="[ '2,000+ Holder', 
                                'Getting Listed on CoinSniper, CMC, CoinGecko', 
                                'Starting Development of first Prototypes', 
                                '1,000,000 $ Marketcap' ]"/>
                <div class="connector-line"></div>
                <Quarter title="2022 Q3"
                        :goals="[ '5,000+ Holder', 
                                'Listing on other Exchanges', 
                                'Influencer Partnerships' ]" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Quarter from "@/components/Quarter.vue";

@Options({
    components: {
        Quarter
    }
})
export default class Roadmap extends Vue
{

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