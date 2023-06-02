const Order = require("../models/orderModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createOrder = catchAsyncErrors(async(req,res,next)=>{
    try {
        const order = await Order.create(req.body);
        res.status(201).json({
            success  : true,
            order,
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(400).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(500).json({
            success: false,
            massage: error._message,
            error:error
          });
    }
});

exports.getAllOrder = catchAsyncErrors (async(req,res) =>{
    try {
        const orders = await Order.find();
        res.status(200).json({
            success: true,
            orders:orders
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(400).json({
            success: false,
            massage: error._message,
            error:error
          });
          res.status(500).json({
            success: false,
            massage: error._message,
            error:error
          });
    }
  });

exports.UpdateOrder = catchAsyncErrors(async (req, res, next) => {
    try {
      let order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(500).json({
          success: false,
          message: "order not found",
        });
      }
      order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      });
      res.status(200).json({
        success: true,
        order:order,
      });
    } catch (error) {
      res.status(501).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(400).json({
        success: false,
        massage: error._message,
        error:error
      });
      res.status(500).json({
        success: false,
        massage: error._message,
        error:error
      });
    }
});
  

exports.OrderByClientId = catchAsyncErrors(async (req, res, next) => {
  try {
    let order = await Order.find({ ClientId: req.params.id });
    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order not found",
      });
    }
    res.status(200).json({
      success: true,
      order: order,
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