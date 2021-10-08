const { model, Schema } = require('mongoose')

const Item = new Schema({
  text: String,
  isDone: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Item', Item)
