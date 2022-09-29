<template>

  <div class="row">
    <div class="col-12">
      <div v-for="g in giphs" class="p-3">
        <img :src="g.tall" alt="" class="img-fluid">
      </div>
    </div>
  </div>


</template>


<script>
import Pop from '../utils/Pop.js';
import { contentService } from '../services/ContentService.js'
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getGiphs() {
      try {
        await contentService.getGiphs()

      } catch (error) {
        Pop.error('[GetGiphs]', error)
      }
    }
    onMounted(() => getGiphs())
    return {
      giphs: computed(() => AppState.giphs)
    }
  }
}
</script>


<style lang="scss" scoped>
body {
  background-color: var(rgb(85, 73, 73));
}
</style>