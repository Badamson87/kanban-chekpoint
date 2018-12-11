let router = require('express').Router()
let Tasks = require('../models/task')

//Get a task
router.get('/:listId', (req, res, next) => {
  Tasks.find({ listId: req.params.listId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


// Create a task

router.post('/', (req, res, next) => {
  Tasks.create(req.body)
    .then(newTask => {
      res.send(newTask)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//edit a task

router.put('/:id', (req, res, next) => {
  Tasks.findById(req.params.id)
    .then(task => {
      task.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next(err)
        }
        res.send("Updated Task")
      })
    })
})

//Delete a Task

router.delete('/:id', (req, res, next) => {
  Tasks.findById(req.params.id)
    .then(task => {
      task.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Task Deleted")
      })
    })
})




module.exports = router