<template>

  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 pt-5 bar-height">
        <Login />
      </div>
      <div class="col-md-8 p-5">
        <router-view />
      </div>
      <div class="col-md-2 bar-height">
        <GiphsComponent />
      </div>
    </div>
  </main>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import GiphsComponent from './components/GiphsComponent.vue'
import Login from './components/Login.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, GiphsComponent, Login }
}
</script>
<style lang="scss">
.bar-height {
  height: 100vh;
  background-color: var(--bs-secondary)
}

@import "./assets/scss/main.scss";
</style>
