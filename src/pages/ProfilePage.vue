<template>
  <div>
    <Pagenation />
  </div>
  <div>
    <ProfileDetails :profile="activeProfile" />
  </div>
  <PostCard v-for="p in posts" :post="p" :key="p.id" />
  <div>
    <Pagenation />
  </div>
</template>


<script>
import ProfileDetails from '../components/ProfileDetails.vue';
import PostCard from '../components/PostCard.vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { contentService } from '../services/ContentService.js';
import Pagenation from '../components/Pagenation.vue';
import { Post } from '../models/Post.js';
import { Account } from '../models/Account.js';
export default {
  props: {
    post: { type: Post },
    profile: { type: Account }
  },
  setup() {
    const route = useRoute()
    async function getPostsById() {
      try {
        await contentService.getPostsById(route.params.id);
      }
      catch (error) {
        Pop.error("[GetPostsById]", error);
      }
    }
    async function getProfileById() {
      try {
        await contentService.getProfileById(route.params.id);
      }
      catch (error) {
        Pop.error("[GetProfile]", error);
      }
    }

    onMounted(() => {
      getPostsById()
      getProfileById()
    })
    return {
      posts: computed(() => AppState.posts),

      activeProfile: computed(() => AppState.activeProfile)
    };
  },
  components: { ProfileDetails, PostCard, Pagenation }
}
</script>


<style lang="scss" scoped>

</style>