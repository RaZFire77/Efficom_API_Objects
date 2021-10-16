const express = require("express")
const router = express.Router()
const ObjectModel = require("../models/Object")

//GET BACK ALL THE OBJECTS
router.get("/", async (req, res) => {
  try {
    const objects = await ObjectModel.find()
    res.json(objects)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET BACK ALL THE ACTIVE OBJECTS

router.get("/active/", async (req, res) => {
  try {
    const objects = await ObjectModel.find({ active: true })
    res.json(objects)
  } catch (err) {
    res.json({ message: err })
  }
})

//GET ALL INACTIVE OBJECTS

router.get("/inactive/", async (req, res) => {
  try {
    const objects = await ObjectModel.find({ active: false })
    res.json(objects)
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMIT AN OBJECT
router.post("/", async (req, res) => {
  const object = new ObjectModel({
    nom: req.body.nom,
    photo: req.body.photo,
    desc: req.body.des,
  })

  try {
    const savedObject = await object.save()
    res.json(savedObject)
  } catch (err) {
    res.json({ message: err })
  }
})

//Delete Object

router.delete("/:postId", async (req, res) => {
  try {
    const removedObject = await ObjectModel.remove({ _id: req.params.objectId })
    res.json(removedObject)
  } catch (err) {
    res.json({ message: err })
  }
})

//Update the statut of a object

router.patch("/:postId", async (req, res) => {
  try {
    const updatedObject = await ObjectModel.updateOne(
      { _id: req.params.postId },
      {
        $set: { active: req.body.active },
      }
    )

    res.json({ updatedObject })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
