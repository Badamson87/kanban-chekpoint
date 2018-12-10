<template>
  <div class="list">
    {{listData.title}}
    {{listData.description}}
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ['listData'],
    mounted() {
    },
    computed: {
      Lists() {
        return this.$store.state.lists
      },
      tasks() {
        return this.$store.state.tasks[this.listData._id] || []
      }
    }
  }
</script>

<style scoped>
</style>