<template>
  <div class="card" v-if="profile">

    <div class="cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
    </div>
    <div class="">
      <img :src="profile.picture" alt="" height="120">
      <h3>{{ profile.name }}

        <a v-if="profile.github" :href="profile.github" target="_blank">
          <i class="mdi mdi-github selectable"></i>
        </a>

      </h3>
    </div>
    <p>{{ profile.bio }}</p>


  </div>
</template>


<script>
import { Account } from '../models/Account.js';

export default {
  props: {
    profile: { type: Account }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cover-img {
  height: 25vh;
  padding: 3rem;
  // background-attachment: fixed;
  // background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}
</style>