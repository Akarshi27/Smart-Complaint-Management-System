const Complaint = require("../models/Complaint");

const addComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(
      req.body
    );

    res.status(201).json({
      success: true,
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateComplaintStatus = async (
  req,
  res
) => {
  try {
    const complaint =
      await Complaint.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      );

    res.json(complaint);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Complaint deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchByLocation = async (
  req,
  res
) => {
  try {
    const complaints = await Complaint.find({
      location: {
        $regex: req.query.location,
        $options: "i",
      },
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const filterByCategory = async (
  req,
  res
) => {
  try {
    const complaints = await Complaint.find({
      category: {
        $regex: req.params.category,
        $options: "i",
      },
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addComplaint,
  getComplaints,
  updateComplaintStatus,
  deleteComplaint,
  searchByLocation,
  filterByCategory,
};