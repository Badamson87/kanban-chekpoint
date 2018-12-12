<template>
  <div class="list">
    {{listData.title}}
    {{listData.description}}
    <button @click="deleteList()">Delete</button>
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
        return this.$store.state.lists || []
      },
      tasks() {
        return this.$store.state.tasks[this.listData._id] || []
      }
    },
    methods: {
      deleteList() {
        this.$store.dispatch('deleteList', this.listData)
      }
    }
  }
</script>

<style scoped>
</style>