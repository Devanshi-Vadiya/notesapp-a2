const express = require("express");
const router = express.Router();

const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
  getNotesByCategory,
  getNotesByStatus,
  getNoteSummary,
  filterNotes,
  getPinnedNotes,
  filterByCategory,
  filterByDateRange,
  paginateNotes
} = require("../controllers/note.controller");

// 🔥 ROUTE PARAMS FIRST
router.get("/category/:category", getNotesByCategory);
router.get("/status/:isPinned", getNotesByStatus);

// 🔥 QUERY PARAM
router.get("/filter", filterNotes);
router.get("/filter/pinned", getPinnedNotes);
router.get("/filter/category", filterByCategory);
router.get("/filter/date-range", filterByDateRange);

//pagination
router.get("/paginate", paginateNotes);

// 🔥 SUMMARY (before :id)
router.get("/:id/summary", getNoteSummary);

// 🔥 CRUD
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

// ✅ VERY IMPORTANT
module.exports = router;