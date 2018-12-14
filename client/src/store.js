import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {},
    comments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, payload) {
      console.log(payload)
      Vue.set(state.tasks, payload.listId, payload.data)
    },
    logout(state) {
      state.user = {}
      router.push({ name: 'login', path: '/login' })
    }
  },
  actions: {
    //AUTH STUFF
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          dispatch("getBoards")
        })
        .catch(err => {
          console.log(err)
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('/logout')
        .then(res => {
          commit('logout')
        })
    },
    //BOARDS
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(newBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },

    //Lists
    getLists({ commit, }, boardId) {
      api.get('lists/' + boardId)
        .then(res => {
          commit('setLists', res.data)
        })
    },

    addList({ commit, dispatch }, listData) {
      console.log(listData)
      api.post("lists/", listData)
        .then(newList => {
          dispatch('getLists', newList.data.boardId)
        })
    },

    updateList({ commit, dispatch }, listId) {
      api.put('lists/' + listId)
        .then(res => {
          dispatch('getLists')
        })
    },

    deleteList({ commit, dispatch }, listData) {
      console.log("delete list store")
      api.delete('lists/' + listData._id)
        .then(res => {
          dispatch("getLists", listData.boardId)
        })
    },

    // TASKS
    createTask({ commit, dispatch }, listData) {
      console.log(listData)
      api.post('tasks/', listData)
        .then(newTask => {
          dispatch('getTasks', newTask.data.listId)
        })
    },

    //Get Tasks

    getTasks({ commit }, listId) {
      api.get('tasks/' + listId)
        .then(res => {
          commit('setTasks', { data: res.data, listId })
        })
    },

    // Delete Task

    deleteTask({ commit, dispatch }, taskData) {
      console.log('Task Deleted')
      api.delete('tasks/' + taskData._id)
        .then(res => {
          dispatch('getTasks', taskData.listId)
        })
    },


    //move Task

    moveTask({ commit, dispatch }, payload) {
      console.log(payload)
      api.put('tasks/' + payload.taskId, { listId: payload.listId })
        .then(res => {
          dispatch('getTasks', payload.listId)
          dispatch('getTasks', payload.oldListId)
        })
    },



    // create a new Comment

    createComment({ commit, dispatch }, payload) {
      api.post('tasks/' + payload.taskId + '/comments', payload)
        .then(res => {
          dispatch('getTasks', payload.listId)
        })
        .catch(err => console.log('cannot create comment'))
    },

    deleteComment({ commit, dispatch }, payload) {
      api.put('tasks/', payload)
        .then(res => {
          dispatch('getTasks', res.data.listId)
        })
    }

  }
})
