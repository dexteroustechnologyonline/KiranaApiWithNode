const Category = require("../models/categoryModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


exports.createCategory = catchAsyncErrors(async(req,res,next)=>{
  try {
      const category = await Category.create(req.body);
      res.status(201).json({
          success  : true,
          category,
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

exports.getAllCategory = catchAsyncErrors (async(req,res) =>{
  try {
      const category = await Category.find();
      res.status(200).json({
          success: true,
          category:category
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

exports.UpdateCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(500).json({
        success: false,
        message: "category not found",
      });
    }
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      category:category,
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

exports.DeleteCategory = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(500).json({
        success: false,
        message: "category not found",
      });
    }
    await category.remove()
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
      let category = await Category.findOne({ slugUrl: req.params.slugurl,  });

    if (!category) {
      return res.status(500).json({
        success: false,
        message: "new category SlugUrl",
      });
    } 

    return res.status(200).json({
      success: true,
      message: " category SlugUrl already exist",
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

exports.UploadDesktopImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const desktopImage = await cloudinary.v2.uploader.upload(req.body.desktopImage, {
      folder: "Category/DesktopImage",
      width: 291,
      crop: "scale",
    });
    const desktopImages =  desktopImage.secure_url;
    res.status(200).json({
      success: true,
      desktopImages,
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
exports.UploadMobileImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const mobileimage = await cloudinary.v2.uploader.upload(req.body.mobileImage, {
      folder: "Category/MobileImage",
      width: 160,
      crop: "scale",
    });
    const mobileimages =  mobileimage.secure_url;
    res.status(200).json({
      success: true,
      mobileimages,
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
exports.UploadCategoryImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const desktopImage = await cloudinary.v2.uploader.upload(req.body.desktopImage, {
      folder: "Category/DesktopImage",
      width: 291,
      crop: "scale",
    });
    const desktopImages =  desktopImage.secure_url;
    const mobileimage = await cloudinary.v2.uploader.upload(req.body.desktopImage, {
      folder: "Category/MobileImage",
      width: 160,
      crop: "scale",
    });
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

exports.categorybyid = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.findById( req.params.id );
    if (!category) {
      return res.status(500).json({
        success: false,
        message: "category not found",
      });
    }
    res.status(200).json({
      success: true,
      category: category,
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


exports.Categorybysupercatid = catchAsyncErrors(async (req, res, next) => {
  try {
    let category = await Category.find({
      superCategoryId: req.params.id,
    });
    if (!category) {
      return res.status(500).json({
        success: false,
        message: "category not found",
      });
    }
    res.status(200).json({
      success: true,
      category: category,
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
