<template>

  <div class="card p-3 pt-4 m-3 elevation-2">
    <div class="post-menu" v-if="post.creator.id == account.id">
      <!-- <div class="dropdown">

        <div class="dropdown-toggle" data-bs-toggle="dropdown" id="post-dropdown" aria-expanded="false">

          <p class="selectable">. . .</p>
        </div>

        <div class="dropdown-menu p-0 text-center list-group" aria-labelledby="post-dropdown">

          <div class="list-group-item list-group-item-action hoverable text-danger d-flex" @click="deletePost"> -->

      <i class="mdi mdi-close text-danger" @click="deletePost(post.id)" title="Delete Post"></i>
      <!-- 
          </div>
        </div>

      </div> -->
      <!-- TODO make dropdown menu for delete/edit -->
    </div>
    <div class="d-flex">
      <!-- TODO RouterLink to post creators profile page -->
      <router-link :to="{name:'Profile', params: {id: post.creator.id}}">
        <img :src="post.creator.picture" :alt="post.creator.name" :title="post.creator.name" height="50"
          class="rounded selectable">
      </router-link>
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
    <div v-if="user.isAuthenticated">
      <div v-if="post.likes">
        <i class="mdi mdi-heart" @click="likeToggle(post.id)"></i><span class="ms-1">{{post.likes.length}}</span>
      </div>
      <div v-else>
        <i class="mdi mdi-heart-outline" @click="likeToggle(post.id)"></i>
      </div>
    </div>
  </div>

</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';
import Pop from '../utils/Pop.js';
import { contentService } from '../services/ContentService.js'

export default {
  props: {
    post: { type: Post, required: true },
  },

  setup() {



    return {
      async deletePost(id) {
        try {
          await contentService.deletePost(id)
        } catch (error) {
          Pop.error('[DeletePost]', error)
        }
      },
      async likeToggle(id) {
        try {
          await contentService.likeToggle(id)
        } catch (error) {
          Pop.error('[LikeToggle]', error)
        }
      },
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
</style>