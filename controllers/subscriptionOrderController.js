const Subscriptionorder = require("../models/subscriptionOrderModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


exports.createSubscriptionOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    const subscriptionorder = await Subscriptionorder.create(req.body);
    res.status(201).json({
      success: true,
      subscriptionorder,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.getAllSubscriptionOrder = catchAsyncErrors(async (req, res) => {
  try {
    const subscriptionorders = await Subscriptionorder.find();
    res.status(200).json({
      success: true,
      subscriptionorders: subscriptionorders,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.updateSubscriptionOrder = catchAsyncErrors(async (req, res, next) => {
  try {
    let subscriptionorder = await Subscriptionorder.findById(req.params.id);
    if (!subscriptionorder) {
      return res.status(500).json({
        success: false,
        message: "subscriptionorder not found",
      });
    }
    subscriptionorder = await Subscriptionorder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      subscriptionorder: subscriptionorder,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.subscriptionOrderByClientId = catchAsyncErrors(async (req, res, next) => {
  try {
    let subscriptionorder = await Subscriptionorder.find({
      ClientId: req.params.id,
    });
    if (!subscriptionorder) {
      return res.status(500).json({
        success: false,
        message: "subscriptionorder not found",
      });
    }
    res.status(200).json({
      success: true,
      subscriptionorder: subscriptionorder,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(400).json({
      success: false,
      massage: error._message,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});