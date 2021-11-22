<template>
    <div class="row">
        <div class="col-12">
            <h4 class="display-4">Roadmap</h4>
            <h5>
                We want to set realistic and not over exaggerated
goals.
            </h5>
        </div>
        <Quarter title="2021 - Q4" 
                 :goals="[ 'Website Launch', 
                           'Telegram, Twitter', 
                           'Launch on Pancakeswap' ]" />
        <Quarter title="2022 - Q1"
                 :goals="[ 'Getting first Holders', 
                           'Starting Marketing' ]" />
        <Quarter title="2022 - Q2" 
                 :goals="[ '2,000+ Holder', 
                           'Getting Listed on CoinSniper, CMC, CoinGecko', 
                           'Starting Development of first Prototypes', 
                           '1,000,000 $ Marketcap' ]"/>
        <Quarter title="2022 Q3"
                 :goals="[ '5,000+ Holder', 
                           'Listing on other Exchanges', 
                           'Influencer Partnerships',
                           'Launching First Products and Online Store' ]" />
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
    .quarter {

    }

</style>