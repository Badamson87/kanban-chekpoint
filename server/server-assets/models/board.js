let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Board'

let Lists = require('./list.js')
let Tasks = require('./task.js')


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  authorId: { type: ObjectId, ref: 'User', required: true }
})


//cascade of delete

schema.pre('remove', function (next) {
  //find all lists and remove them
  this._id //this is the board id
  // @ts-ignore
  Promise.all([
    Lists.deleteMany({ boardId: this._id }),
    Tasks.deleteMany({ boardId: this._id })
  ])
    .then(() => next())
    .catch(err => (err))
})

module.exports = mongoose.model(schemaName, schema)