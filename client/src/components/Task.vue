<template>
  <div class="task">
    <div class="card">
      <div class="cardbody">
        <h4 class="card-title">{{taskData.title}} </h4>
        <p class="card-text">{{taskData.description}}</p>
        <button @click="deleteTask()">Delete</button>
      </div>
    </div>
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


    },
    methods: {
      deleteTask() {
        this.$store.dispatch('deleteTask', this.taskData)
      }
    }
  }

</script>

<style>


</style>