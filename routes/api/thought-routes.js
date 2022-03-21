const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThought);

router.route("/:userId/:thoughtId").delete(deleteThought);

// /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(addReaction);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
