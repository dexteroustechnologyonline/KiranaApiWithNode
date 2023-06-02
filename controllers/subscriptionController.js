const Subscription = require("../models/subscriptionModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createSubscription = catchAsyncErrors(async(req,res,next)=>{
    try {
        const subscription = await Subscription.create(req.body);
        res.status(201).json({
            success  : true,
            subscription,
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

exports.getAllSubscription = catchAsyncErrors (async(req,res) =>{
    try {
        const subscription = await Subscription.find();
        res.status(200).json({
            success: true,
            subscription:subscription
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

exports.UpdateSubscription = catchAsyncErrors(async (req, res, next) => {
    try {
      let subscription = await Subscription.findById(req.params.id);
      if (!subscription) {
        return res.status(500).json({
          success: false,
          message: "Subscription not found",
        });
      }
      subscription = await Subscription.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      });
      res.status(200).json({
        success: true,
        subscription:subscription,
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

exports.DeleteSubscription = catchAsyncErrors(async (req, res, next) => {
    try {
      let subscription = await Subscription.findById(req.params.id);
      if (!subscription) {
        return res.status(500).json({
          success: false,
          message: "Subscription not found",
        });
      }
      await subscription.remove()
        res.status(200).json({
        success: true,
        
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

exports.SlugUrlExist = catchAsyncErrors(
    async (req, res, next) => {
      try {
        let subscription = await Subscription.findOne({ slugUrl: req.params.slugurl,});
  
      if (!subscription) {
        return res.status(500).json({
          success: false,
          message: "new Subscription SlugUrl",
        });
      } 
  
      return res.status(200).json({
        success: true,
        message: " Subscription SlugUrl already exist",
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

exports.UploadSubscriptionImage = catchAsyncErrors(async (req, res, next) => {
    try {
      const desktopImage = await cloudinary.v2.uploader.upload(
        req.body.desktopImage,
        {
          folder: "Subscription/DesktopImage",
          width: 450,
          heigth: 450,
          crop: "scale",
        }
      );
      const desktopImages =  desktopImage.secure_url;

      const mobileimage = await cloudinary.v2.uploader.upload(
        req.body.desktopImage,
        {
          folder: "Subscription/MobileImage",
          width: 150,
          heigth: 150,
          crop: "scale",
        }
      );
      const mobileimages =  mobileimage.secure_url;
      res.status(200).json({
        success: true,
        desktopImages,
        mobileimages
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
  

exports.subscriptionbyid = catchAsyncErrors(async (req, res, next) => {
  try {
    let subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(500).json({
        success: false,
        message: "subscription not found",
      });
    }
    res.status(200).json({
      success: true,
      subscription: subscription,
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