<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center" @click="getPosts()">
        <h3>The Network</h3>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <!-- <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li> -->
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <form @submit.prevent="getSearch()">
        <input class="rounded me-1" type="search" v-model="editable.search" name="search" id="search">
        <button class="btn btn-sm btn-primary rounded" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';
import { contentService } from '../services/ContentService.js';
import Pop from '../utils/Pop.js';
import Login from './Login.vue'
export default {
  props: {
    post: { type: Post }
  },
  setup() {
    const editable = ref({})
    return {
      post: computed(() => AppState.posts),
      editable,
      async getSearch() {
        try {

          await contentService.getSearch(editable.value.search, AppState.page)
          editable.value = {}
        } catch (error) {
          Pop.error('[GetSearch]', error)
        }
      },
      async getPosts() {
        try {
          await contentService.getPosts();
          // console.log(AppState.posts);
        }
        catch (error) {
          Pop.error("[GetPosts]", error);
        }
      },

    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
