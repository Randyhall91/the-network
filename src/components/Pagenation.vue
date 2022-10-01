<template>
  <div class="d-flex justify-content-between">
    <button class="btn btn-secondary" :disabled="page == 1" @click="getPosts(-1)">Previous</button>
    <p>{{page}}</p>
    <button class="btn btn-secondary" @click="getPosts(1)">Next</button>
  </div>

</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';
import { contentService } from '../services/ContentService.js';

export default {
  props: {
    post: { type: Post }
  },
  setup() {
    return {
      page: computed(() => AppState.page),

      async getPosts(n) {
        try {
          if (AppState.page == 1 && n == -1) { throw new Error('Hold up...turn back') }


          // switch (true) {
          //   case (!AppState.term == true && AppState.activeProfile == true): await contentService.getPosts(AppState.page + n);
          //     break;
          //   case (AppState.term == true && !AppState.activeProfile == true): await contentService.getSearch(AppState.term, AppState.page + n)
          //     break;
          //   default: await contentService.getPosts(AppState.page + n);

          // }




          if (!AppState.term) {
            await contentService.getPosts(AppState.page + n)

          } else {
            await contentService.getSearch(AppState.term, AppState.page + n)
          }
        }
        catch (error) {
          Pop.error("[GetPostsnextormaybeprevious]", error);
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>