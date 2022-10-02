<template>
  <div class="about">
    <ProfileDetails :profile="user" class="elevation-2 mt-3" />
  </div>
  <div>
    <AccountForm class="elevation-2 mt-3" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import PostCard from '../components/PostCard.vue';
import ProfileDetails from '../components/ProfileDetails.vue';
import AccountForm from '../components/AccountForm.vue';
export default {
  setup() {

    return {
      user: computed(() => AppState.user),

    };
  },
  components: { PostCard, ProfileDetails, AccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
