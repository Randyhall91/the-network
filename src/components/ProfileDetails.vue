<template>
  <div class="card" v-if="profile">

    <div v-if="profile.coverImg" class="cover-img mb-5" :style="{backgroundImage: `url(${profile.coverImg})`}">
    </div>
    <div v-else class="cover-img mb-5" :style="{backgroundImage: 'url(http://thiscatdoesnotexist.com)'}"></div>

    <img v-if="profile.picture" class="profile-photo" :src="profile.picture" alt="" height="120">
    <img v-else class="profile-photo" :src="'http://thiscatdoesnotexist.com'" height="120">
    <div class="p-3">

      <h3>{{ profile.name }} </h3>

      <div class="d-flex">
        Socials :
        <a v-if="profile.github" :href="profile.github" target="_blank">
          <i class="mdi mdi-github selectable"></i>
        </a>
        <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
          <i class="mdi mdi-linkedin selectable"></i>
        </a>
      </div>
      <div>
        <div>
          <p>Class of: {{profile.class}}</p>
        </div>

        <div class="d-flex">

          <p>Graduated: </p>
          <div v-if="profile.graduated == true">
            <i class="mdi mdi-duck" title="Graduated!"></i>
          </div>
          <div v-else>
            <i class="mdi mdi-egg-outline" title="Still working on it..."></i>
          </div>
        </div>


      </div>
      <div>

        Details: {{ profile.bio }}
      </div>



    </div>
  </div>
</template>


<script>import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

import { Account } from '../models/Account.js';

export default {
  props: {
    // profile: { type: Account }
  },
  setup() {

    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>


<style lang="scss" scoped>
.cover-img {
  height: 25vh;
  padding: 3rem;
  // background-attachment: fixed;
  background-position: center;
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

.profile-photo {
  clear: both;
  display: block;
  max-width: 150px;
  margin: 0 auto 30px;
  border-radius: 100%;
  position: absolute;
  top: 12rem;
  left: 1rem;
}
</style>