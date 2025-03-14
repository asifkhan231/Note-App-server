const express = require("express")
const { getNote, createNote, deleteNote, updateNote } = require("../controller/notesController")
const noteRouter = express.Router()
const auth = require("../middleware/auth")

noteRouter.get("/", auth,  getNote)

noteRouter.post("/", auth,  createNote)

noteRouter.delete("/:id", auth,  deleteNote)

noteRouter.put("/:id",auth,   updateNote)

module.exports = noteRouter;