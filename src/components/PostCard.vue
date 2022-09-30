<template>

  <div class="card p-3 pt-4 m-3 elevation-2">
    <div class="post-menu">
      <!-- TODO readd v-if="post.creator.id == account.id" -->
      <p class="selectable">...</p>
      <!-- TODO make dropdown menu for delete/edit -->
    </div>
    <div class="d-flex">
      <img :src="post.creator.picture" :alt="post.creator.name" :title="post.creator.name" height="50" class="rounded">
      <div class="ms-3">
        <h2>{{post.creator.name}}</h2>
        <p>Posted: {{new Date(post.createdAt).toLocaleDateString('en-US',
        {month: 'short', year:'2-digit'})}}</p>
        <!-- TODO Format date with if created is >24hrs day-Month <24hrs say #of hours since creation -->
      </div>
    </div>
    <div class="card-body">
      <div>
        {{post.body}}
      </div>
      <div class="text-center" v-if="post.imgUrl">
        <img :src="post.imgUrl" alt="" class="img-fluid">
      </div>
    </div>
  </div>

</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';

export default {
  props: {
    post: { type: Post, required: true },
  },

  setup() {

    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)

    }
  }
}
</script>


<style lang="scss" scoped>
.post-menu {
  position: absolute;
  right: .5rem;
  top: 0rem;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(138, 15, 2);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}
</style>