<template>
  <div class="task">
    {{taskData.title}}
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: ['taskData'],
    data() {
      return {

      }
    },
    mounted() {
    },
    computed: {
      // tasks() {
      //   return this.$store.state.tasks.listId || []
      // }

    },
    methods: {}
  }

</script>

<style>


</style>