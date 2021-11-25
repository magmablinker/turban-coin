<template>
    <div class="row" id="about" style="min-height: 100vh;">
        <div class="col-12 col-md-6 mx-auto">
            <h4 class="display-4 m-0">About</h4>
            <div class="row">
                 <div class="col-12">
                    <div class="about-card turban-border p-2">
                        <div class="about-card-header">
                            <h4 class="m-0 pb-1">What are we planning?</h4>
                        </div>
                        <div class="about-card-body">
                            <div class="row p-2">
                                <div class="col d-flex justify-content-center align-items-center">
                                    <img src="/icon.png" alt="turban-icon" class="turban-icon">
                                </div>
                                <div class="col">
                                    <ul class="list-unstyled">
                                        <li class="mb-1">We want to create a coin that has an utility beyond pumping and dumping.</li>
                                        <li class="mb-1">We're looking for long term growth. We wan't to build an established brand.</li>
                                        <li class="mb-1">Our main goal is, to fund our project with the sale of turban coin tokens.</li>
                                        <li class="mb-1">We're currently focusing on, developing the website, webshop and smart contract for turban coin.</li>
                                        <li class="mb-1">When we're ready we'll deploy an online shop we're you'll be able to buy various products related to turban coin. The main focus will lie on turbans, as the name of the coin implies.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <div class="about-card turban-border p-2">
                        <div class="about-card-header">
                            <h4 class="m-0 pb-1">Who are we?</h4>
                        </div>
                        <div class="about-card-body">
                            <div class="row p-2">
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center portrait-column mb-4 mb-md-0">
                                    <img src="/img/placeholder.jpeg" alt="developer" class="portrait-image">
                                    <h5 class="text-muted m-0">Developer</h5>
                                    <p class="text-muted m-0">pmma_</p>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center portrait-column mb-4 mb-md-0">
                                    <img src="/img/placeholder.jpeg" alt="developer" class="portrait-image">
                                    <h5 class="text-muted m-0">Designer</h5>
                                    <p class="text-muted m-0">forsa</p>
                                </div>
                                <div class="col-12 col-md-4 d-flex justify-content-center align-items-center portrait-column">
                                    <img src="/img/placeholder.jpeg" alt="developer" class="portrait-image">
                                    <h5 class="text-muted m-0">Marketing</h5>
                                    <p class="text-muted m-0">fäb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class About extends Vue
{

}
</script>

<style>
    .about-card {
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 35%, rgba(7,10,36,1) 100%);
    }

    .about-card-header {
        border-bottom: 2px solid var(--main-fore-color);
        margin-bottom: .25rem;
    }

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