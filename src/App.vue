<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-12">
        <div class="turban-border text-center p-2">
          <h4 class="display-2 m-0">
            Turban Coin
          </h4>
        </div>
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
  </div>
  <footer class="turban-coin-footer text-center p-2">
    Made with ❤ in Switzerland
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Roadmap from "@/components/Roadmap.vue";
import Whitepaper from "@/components/Whitepaper.vue";

@Options({
  components: {
    Roadmap,
    Whitepaper
  },
})
export default class App extends Vue {}
</script>

<style>

body, html {
  background-color: rgb(7, 10, 36) !important;
  color: white !important;
}

.turban-border {
  border: 2px solid rgb(17, 24, 85);
  border-radius: .25rem;
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
  border-bottom: 4px solid rgb(17, 24, 85);
  border-top: 4px solid rgb(17, 24, 85);
}

</style>
