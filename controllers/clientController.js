const Client = require("../models/clientModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createClient = async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({
      success: true,
      client,
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
};

exports.getAllClient = catchAsyncErrors(async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json({
      success: true,
      clients,
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

exports.UpdateCLient = catchAsyncErrors(async (req, res, next) => {
  try {
    let client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(500).json({
        success: false,
        message: "client not found",
      });
    }
    client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      client: client,
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

exports.UpdateCLientAddress = catchAsyncErrors(async (req, res, next) => {
  try {
    let client = await Client.findById(req.body.ClientId);
    if (!client) {
      return res.status(200).json({
        success: false,
        message: "client not found",
      });
    }
    let currentAddress =
      ", Phone Number : " +
      req.body.Number +
      ", State : " +
      req.body.State +
      ", City : " +
      req.body.City +
      ", Pincode : " +
      req.body.Pincode +
      ", House/ Flat No : " +
      req.body.HNo +
      ", LandMark: " +
      req.body.LandMark;

    req.body.Address = currentAddress;

    client.Addresses = [req.body, ...client.Addresses];

    client = await Client.findByIdAndUpdate(req.body.ClientId, client, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      client: client,
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

exports.clientById = catchAsyncErrors(async (req, res, next) => {
  try {
    let client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(500).json({
        success: false,
        message: "client not found",
      });
    }
    res.status(200).json({
      success: true,
      client: client,
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

exports.DeleteClient = catchAsyncErrors(async (req, res, next) => {
  try {
    let client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(500).json({
        success: false,
        message: "client not found",
      });
    }
    await client.remove();
    res.status(200).json({
      success: true,
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


exports.loginClient = catchAsyncErrors(async (req, res, next) => {
  try {
    const client = await Client.findOne({ Mobile: req.body.Mobile });

    if (!client) {
      return res.status(500).json({
        success: false,
        message: "client not found",
      });
    }
    const mobile = client.Mobile;
    const clientid = client._id;

    res.status(200).json({
      success: true,
      clientid,
      mobile,
      client,
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
