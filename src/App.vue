<template>

  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 pt-5 bar-height sticky-top">
        <Login />
      </div>
      <div class="col-md-8 p-5">
        <router-view />
      </div>
      <div class="col-md-2 bar-height sticky-top">
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
  background-color: var(--bs-secondary);

}

.navbar {
  position: static
}

.header {
  height: 3rem;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  transform: translate3d(0px, -100%, 0px);
  transition: all 0.2s ease-in-out 0s;
}

@import "./assets/scss/main.scss";
</style>
