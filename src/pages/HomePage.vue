<template>
  <div>
    <PostForm />
  </div>

  <div>
    <PostCard v-for="p in post" :post="p" />
  </div>



</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { contentService } from '../services/ContentService.js';
import Pop from '../utils/Pop.js';
import PostCard from '../components/PostCard.vue';
import PostForm from '../components/PostForm.vue';

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
      post: computed(() => AppState.posts),
    };
  },
  components: { PostCard, PostForm }
}
</script>

<style scoped lang="scss">

</style>
