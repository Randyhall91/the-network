<template>
  <div>
    <ProfileDetails :profile="activeProfile" />
  </div>
  <PostCard v-for="p in posts" :post="p" :key="p.id" />
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
export default {
  setup() {
    const route = useRoute()
    async function getPostsById() {
      try {
        await contentService.getPostsById(route.params.id);
        // console.log(AppState.posts);
      }
      catch (error) {
        Pop.error("[GetPostsById]", error);
      }
    }
    async function getProfileById() {
      try {
        await contentService.getProfileById(route.params.id);
        // console.log(AppState.posts);
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
      //TODO set Active Profile instead of my activeProfile

      activeProfile: computed(() => AppState.activeProfile)
    };
  },
  components: { ProfileDetails, PostCard }
}
</script>


<style lang="scss" scoped>

</style>