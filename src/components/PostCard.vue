<template>
  <div class="post-card tex-shadow">
    {{post}}
  </div>
</template>


<script>
import { Post } from '../models/Post.js';

export default {
  props: {
    post: { type: Post, required: true },
  },
  setup() {

    return {}
  }
}
</script>


<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(138, 15, 2);
  font-weight: bold;
  letter-spacing: 0.08rem
    /* Second Color  in text-shadow is the blur */
}
</style>