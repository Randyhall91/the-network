<template>

  <div>
    <PostCard v-for="p in posts" :post="p" />
  </div>



</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { contentService } from '../services/ContentService.js';
import Pop from '../utils/Pop.js';
import PostCard from '../components/PostCard.vue';

export default {
  setup() {
    async function getPosts() {
      try {
        await contentService.getPosts();
        // console.log(AppState.posts);
      }
      catch (error) {
        Pop.error("[GetPosts]", error);
      }
    }
    onMounted(() => {
      getPosts();
    });

    return {
      posts: computed(() => AppState.posts),
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">

</style>
