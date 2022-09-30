<template>
  <div class="card bg-light bg-opacity-75">
    <span class="navbar-text mt-3">
      <!-- Login Button -->

      <button class="btn selectable text-dark lighten-30 text-uppercase my-2 my-lg-0" @click="login"
        v-if="!user.isAuthenticated">
        Login
      </button>

      <div class="dropdown text-center my-2 my-lg-0" v-else>
        <div class="dropdown-toggle selectable" data-bs-toggle="dropdown" aria-expanded="false" id="authDropdown">



          <img :src="account.picture" alt="account photo" height="75" class="rounded" />


        </div>
        <div class="dropdown-menu p-0 list-group w-100" aria-labelledby="authDropdown">
          <router-link :to="{ name: 'Account' }">
            <div class="list-group-item list-group-item-action hoverable">
              Manage Account
            </div>
          </router-link>
          <div class="list-group-item list-group-item-action hoverable text-danger" @click="logout">
            <i class="mdi mdi-logout"></i>
            logout
          </div>
        </div>
      </div>
    </span>
    <span class="mt-2 d-flex flex-column text-center">
      <div v-if="account.name">
        <p><strong>{{account.name}}</strong></p>
      </div>
      <div v-if="account.github">
        <a :href="account.github">
          <i class="i mdi mdi-github selectable"></i>
        </a>
      </div>

    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    // console.log(AppState.user);

    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
</style>
