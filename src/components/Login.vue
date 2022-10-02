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
            <div class="list-group-item list-group-item-action hoverable" @click="setActiveProfile()">
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

      <div>

        <a v-if="account.github" :href="account.github" target="_blank">
          <i class="mdi mdi-github selectable"></i>
        </a>
        <a v-if="account.linkedin" :href="account.linkedin" target="_blank">
          <i class="mdi mdi-linkedin selectable"></i>
        </a>
      </div>

    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { contentService } from '../services/ContentService.js'
import Pop from '../utils/Pop.js'
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
      },
      async setActiveProfile() {
        try {
          await contentService.getProfileById(AppState.account.id)
        } catch (error) {
          Pop.error('[SetActiveProfiletoAccount]', error)
        }
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
