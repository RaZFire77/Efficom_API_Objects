const mongoose = require("mongoose")

const ObjectSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Objects", ObjectSchema)
