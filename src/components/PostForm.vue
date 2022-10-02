<template>
  <div class="card elevation-2">
    <div class="card-body">
      <!-- <router-link :to="{name:'Profile', params:{id: account.id}}"> -->
      <img :src="account.picture" :alt="account.name" :title="account.name" height="50" class="rounded">
      <!-- </router-link> -->
      {{account.name}}
      <form @submit.prevent="handleSubmit">
        <div class="form-floating my-3">
          <textarea class="form-control" id="body" v-model="editable.body" rows="3" required></textarea>
          <label for="floatingLabel">What cha thinkin about?</label>
        </div>
        <div class="d-flex justify-content-between">
          <div class="form-floating ">
            <input class="form-control" type="url" v-model="editable.imgUrl" id="picUrl" placeholder="url">
            <label for="picUrl">Link your pic or giph!</label>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Post</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { contentService } from '../services/ContentService.js';
import Pop from '../utils/Pop.js';

export default {

  setup() {
    const editable = ref({})
    return {
      editable,
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async handleSubmit() {
        try {
          await contentService.submitPost(editable.value)
        } catch (error) {
          Pop.error('[handleSubmit]', error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>