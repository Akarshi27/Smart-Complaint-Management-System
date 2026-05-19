const express = require("express");

const {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
  searchByLocation,
  filterByCategory,
} = require("../controllers/complaintController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addComplaint);

router.get("/", protect, getComplaints);

router.put(
  "/:id",
  protect,
  updateComplaintStatus
);

router.delete(
  "/:id",
  protect,
  deleteComplaint
);

router.get(
  "/search/location",
  protect,
  searchByLocation
);

router.get(
  "/category/:category",
  protect,
  filterByCategory
);

module.exports = router;