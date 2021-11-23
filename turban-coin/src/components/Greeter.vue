<template>
    <div class="col-12 p-0 turban-greeter">
        <div class="sky">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
        </div>
        <div class="row h-100 m-0">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <div class="logo">
                    <h1 class="display-4" v-if="languageService">{{ languageService.getItem("title") }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import LanguageService from "@/services/language/LanguageService";
import { inject, cid } from "inversify-props";
import { Vue } from "vue-class-component";

export default class Greeter extends Vue
{
  @inject("LanguageServiceFactory") private readonly _languageServiceFactory!: () => LanguageService;
  private languageService!: LanguageService;

  mounted() {
    this.languageService = this._languageServiceFactory();
  }

}
</script>

<style>
.turban-greeter {
  height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 35%, rgba(7,10,36,1) 100%);
}

.sky {
    position: relative;
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
}

.star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  border-radius: 885px;
  background: linear-gradient(-45deg, 
    #eef0f5, rgba(0, 0, 255, 0));
  
  -webkit-filter: drop-shadow(0 0 6px #eef1f8);
  filter: drop-shadow(0 0 6px #d7dff0);
  -webkit-animation: tail 3000ms ease-in-out infinite,
    shooting 3000ms ease-in-out infinite;
  animation: tail 3000ms ease-in-out infinite,
    shooting 3000ms ease-in-out infinite;
}

/* Here we add before and after effect to star */
.star::before,
.star::after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 255, 0),
    #eaeef8,
    rgba(0, 0, 255, 0)
  );
  -webkit-transform: translateX(50%) rotateZ(45deg);
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
  animation: shining 3000ms ease-in-out infinite;
}
.star::after {
  -webkit-transform: translateX(50%) rotateZ(-45deg);
  transform: translateX(50%) rotateZ(-45deg);
}
  
/* Here we are adding location of each 
   nth-child, animations, delays, and 
   before and after effects to each 
   and every balls(stars) */
.star:nth-child(1) {
  top: calc(50% - -119px);
  left: calc(50% - 43px);
  -webkit-animation-delay: 4000ms;
  animation-delay: 4000ms;
}
.star:nth-child(1)::before,
.star:nth-child(1)::after {
  -webkit-animation-delay: 4000ms;
  animation-delay: 4000ms;
}
.star:nth-child(2) {
  top: calc(50% - -43px);
  left: calc(50% - 37px);
  -webkit-animation-delay: 5000ms;
  animation-delay: 5000ms;
}
.star:nth-child(2)::before,
.star:nth-child(2)::after {
  -webkit-animation-delay: 5000ms;
  animation-delay: 5000ms;
}
.star:nth-child(3) {
  top: calc(50% - -40px);
  left: calc(50% - 222px);
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(3)::before,
.star:nth-child(3)::after {
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(4) {
  top: calc(50% - -29px);
  left: calc(50% - 113px);
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(4)::before,
.star:nth-child(4)::after {
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(5) {
  top: calc(50% - 146px);
  left: calc(50% - 112px);
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(5)::before,
.star:nth-child(5)::after {
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(6) {
  top: calc(50% - -108px);
  left: calc(50% - 160px);
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(6)::before,
.star:nth-child(6)::after {
  -webkit-animation-delay: 3000ms;
  animation-delay: 3000ms;
}
.star:nth-child(7) {
  top: calc(50% - 52px);
  left: calc(50% - 72px);
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
.star:nth-child(7)::before,
.star:nth-child(7)::after {
  -webkit-animation-delay: 7000ms;
  animation-delay: 7000ms;
}
  
/* This code will help to generate 
effect in tail of star */
@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
  
/* This code will generate shining 
effect in head of star */
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
  
/* Here we are adding webkit-animation 
to head of star for shining */
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
  
/* Here we are adding webkit-animation 
to tail of star */
@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
  
/* Here we are adding webkit-animation 
for shooting effect */
@-webkit-keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(270px);
    transform: translateX(270px);
  }
}
  
/* Here we make shooting effect */
@keyframes shooting {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(270px);
    transform: translateX(270px);
  }
}
</style>