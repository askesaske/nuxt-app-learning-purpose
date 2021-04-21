<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
export default {
  middleware: 'log',
  // fetch(context) {
  //
  //     .then(data => {
  //       context.store.commit('setPosts', data.loadedPosts)
  //     })
  //     .catch(e => {
  //       context.error(new Error())
  //     })
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
