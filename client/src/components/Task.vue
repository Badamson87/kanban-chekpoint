<template>
  <div class="task">
    <div class="card">
      <div class="cardbody">
        <h4 class="card-title">{{taskData.title}} </h4>
        <p class="card-text">{{taskData.description}}</p>
        <button @click="deleteTask()">Delete</button>


        <button @click="">Comment</button>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Move
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <!-- <task v-for="list in lists" :listData="list" :taskData="task"></task> -->
            <a v-for="list in lists" :listData="list" class="dropdown-item" href="#">{{listData.title}}</a>



            <!--<a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a> -->
          </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: ['taskData', 'listData'],
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