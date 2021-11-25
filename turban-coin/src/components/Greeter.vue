<template>
    <div class="col-12 p-0 turban-greeter">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div class="row h-100 m-0">
          <Navbar />
          <div class="col-12 d-flex justify-content-center align-items-center">
              <div class="logo">
                <img src="/img/icons/turban-coin-logo.png" alt="turban-coin-logo" class="turban-coin-logo" @click="onTurbanButtonClick">
              </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import LanguageDto from "@/classes/dtos/LanguageDto";
import LanguageService from "@/services/language/LanguageService";
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: {
    Navbar
  }
})
export default class Greeter extends Vue
{
  @inject() private readonly languageService!: LanguageService;

  private languageDto!: LanguageDto;

  beforeMount() 
  {
    this.languageDto = this.languageService.languageDto;
  }

  private onTurbanButtonClick(): void
  {
    let scrollDistance = document.documentElement.clientHeight;

    window.scrollBy(0, scrollDistance);
  }

}
</script>

<style>
.turban-greeter {
  height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 35%, rgba(7,10,36,1) 100%);
}

.turban-coin-logo {
  max-width: 50vw;
}

.turban-coin-logo:hover {
  cursor: pointer;
}
</style>