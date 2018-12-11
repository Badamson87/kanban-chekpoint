let router = require('express').Router()
let Lists = require('../models/list')

//Get A List
router.get('/:boardId', (req, res, next) => {
  Lists.find({ boardId: req.params.boardId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST CREATE A LIST
router.post('/', (req, res, next) => {
  Lists.create(req.body)
    .then(newList => {
      res.send(newList)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT EDIT LIST
router.put('/:id', (req, res, next) => {
  Lists.findById(req.params.id)
    .then(list => {
      list.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next(err)
        }
        res.send("Successfully Updated")
      });
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//DELETE LIST
router.delete('/:id', (req, res, next) => {
  Lists.findById(req.params.id)
    .then(list => {
      // if (!list.authId.equals(req.session.uid)) {      for mult users
      //   return res.status(401).send("ACCESS DENIED!")
      // }
      list.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted")
      });
    })
})




module.exports = router