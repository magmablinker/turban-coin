<template>
    <div class="col-12 quarter">
        <div class="quarter-header pb-2 text-center">
            <h2 class="m-0 turban-border-top-bottom p-2">{{ title }}</h2>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <div class="turban-border p-2">
                    <ul class="list-unstyled mb-0">
                        <li v-for="goal in goals" :key="goal">
                            {{ goal }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
    props: {
        title: String,
        goals: Array
    }
})
export default class Quarter extends Vue
{

    title!: string;
    goals!: Array<string>

}
</script>

<style scoped>

</style>