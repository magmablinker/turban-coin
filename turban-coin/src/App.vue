<template>
  <div class="container-fluid">
    <div class="row" style="height: 100vh;">
      <Greeter />
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <About />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <Roadmap />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <Whitepaper />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <FAQ />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <Impressum />
      </div>
    </div>
  </div>
  <footer class="turban-coin-footer text-center p-2">
    Made with 💙 in Switzerland <span class="version-number">v{{ version }}</span>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Roadmap from "@/components/Roadmap.vue";
import Whitepaper from "@/components/Whitepaper.vue";
import Greeter from "@/components/Greeter.vue";
import Impressum from "@/components/Impressum.vue";
import About from "@/components/About.vue";
import FAQ from "@/components/FAQ.vue";
import { version } from "../package.json";

@Options({
  components: {
    Roadmap,
    Whitepaper,
    Greeter,
    Impressum,
    About,
    FAQ
  },
})
export default class App extends Vue 
{

  get version(): string
  {
    return version ?? "0.0.0"
  }

}
</script>

<style>

body, html {
  background-color: var(--body-background-color) !important;
  color: var(--font-color) !important;
}

.turban-border {
  border: 2px solid var(--main-fore-color);
  border-radius: .25rem;
}

p .text-muted {
  color: var(--text-muted-color) !important;
}

.turban-coin-footer {
  position: relative;
  width: 100%;
  bottom: 0;
}

.turban-logo-header, .turban-coin-footer {
  background-color: rgb(7, 10, 15, 0.5) !important;
}

.turban-border-top-bottom {
  border-bottom: 4px solid var(--main-fore-color);
  border-top: 4px solid var(--main-fore-color);
}

.version-number {
  float: right;
}
</style>
