<template>
  <div>
    <Pagenation />
  </div>
  <div>
    <PostForm v-if="user.isAuthenticated" />
  </div>

  <div>
    <PostCard v-for="p in post" :post="p" />
  </div>
  <!-- <Pagenation /> -->



</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { contentService } from '../services/ContentService.js';
import Pop from '../utils/Pop.js';
import PostCard from '../components/PostCard.vue';
import PostForm from '../components/PostForm.vue';
import Pagenation from '../components/Pagenation.vue';
import { Post } from '../models/Post.js';

export default {
  props: {
    post: { type: Post }
  },
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
      user: computed(() => AppState.user),
      totalPages: computed(() => AppState.totalPages)
    };
  },
  components: { PostCard, PostForm, Pagenation }
}
</script>

<style scoped lang="scss">

</style>
