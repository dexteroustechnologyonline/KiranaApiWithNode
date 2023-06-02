const Grocery = require("../models/groceryModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const { log } = require("console");

exports.createGrocery = catchAsyncErrors(async (req, res, next) => {
  try {
    const grocery = await Grocery.create(req.body);
    res.status(201).json({
      success: true,
      grocery,
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

exports.getAllGrocery = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find();
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAllTrending = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({ Trending: true });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAllHotProducts = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({ HotProducts: true });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAllOffers = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({ Offers: true });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAllDealOfTheDAy = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({ Recommends: true });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.UpdateGrocery = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "Grocery not found",
      });
    }
    grocery = await Grocery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.AddGroceryPacksize = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.findOne({ ProductId: req.body.ProductId });
    if (!grocery) {
      return res.status(200).json({
        success: false,
        message: "Grocery not found",
      });
    }

    grocery.PackSizes = [...grocery.PackSizes, req.body];
    grocery = await Grocery.findByIdAndUpdate(grocery._id, grocery, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.UpdateGroceryPacksize = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.findOne({ ProductId: req.params.id });
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "Grocery not found",
      });
    }
    grocery.PackSizes = [...grocery.PackSizes, req.body];
    grocery = await Grocery.findOneAndUpdate(
      { ProductId: req.params.id },
      req.body,
      {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.DeleteGrocery = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "Grocery not found",
      });
    }
    await grocery.remove();
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

exports.SlugUrlExist = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.findOne({ Url: req.params.slugurl });

    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "new Grocery SlugUrl",
      });
    }

    return res.status(200).json({
      success: true,
      message: " Grocery SlugUrl already exist",
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

exports.UploadGroceryImage = catchAsyncErrors(async (req, res, next) => {
  try {
    const desktopImage = await cloudinary.v2.uploader.upload(
      req.body.desktopImage,
      {
        folder: "Grocery/DesktopImage",
        width: 450,
        heigth: 450,
        crop: "scale",
      }
    );
    const desktopImages = desktopImage.secure_url;

    const desktopImageIcon = await cloudinary.v2.uploader.upload(
      req.body.desktopImage,
      {
        folder: "Grocery/DesktopIcon",
        width: 75,
        heigth: 75,
        crop: "scale",
      }
    );
    const desktopImageIcons = desktopImageIcon.secure_url;

    const mobileimage = await cloudinary.v2.uploader.upload(
      req.body.desktopImage,
      {
        folder: "Grocery/MobileImage",
        width: 150,
        heigth: 150,
        crop: "scale",
      }
    );
    const mobileimages = mobileimage.secure_url;

    const mobileimageIcon = await cloudinary.v2.uploader.upload(
      req.body.desktopImage,
      {
        folder: "Grocery/MobileIcon",
        width: 45,
        heigth: 45,
        crop: "scale",
      }
    );
    const mobileimageIcons = mobileimageIcon.secure_url;
    res.status(200).json({
      success: true,
      desktopImages,
      desktopImageIcons,
      mobileimages,
      mobileimageIcons,
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

exports.gatBannerTag = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({
      BannerTag: { $regex: req.params.bantagname },
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.gatCategoryTag = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({
      CategoryTag: { $regex: req.params.cattagname },
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.gatUniversalTag = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({
      UniversalTag: { $regex: req.params.unitagname },
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.gorcerybycatid = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.find({ CatId: req.params.id });
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "grocery not found",
      });
    }
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.gorcerybysupercatid = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.find({ superCategoryId: req.params.id });
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "grocery not found",
      });
    }
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getgorcerybysubcatid = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.find({ SubCatId: req.params.id });
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "grocery not found",
      });
    }
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.myGroceryAll = catchAsyncErrors(async (req, res) => {
  try {
    const groceries = await Grocery.find();
    for (let index = 0; index < groceries.length; index++) {
      const groceryid = groceries[index]._id;
      let grocery = await Grocery.findById(groceryid);

      if (!grocery) {
        return res.status(500).json({
          success: false,
          message: "grocery not found",
        });
      }

      // grocery.PackSizes.CartQuantity = 0;
      grocery.PackSizes.map((pack) => {
        pack.maximumQuantity = 10;
      });
      grocery = await Grocery.findByIdAndUpdate(groceryid, grocery, {
        new: true,
        useFindAndModify: false,
        runValidators: true,
      });
    }

    res.status(200).json({
      success: true,
      groceries: groceries,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error,
    });
    res.status(400).json({
      success: false,
      error: error,
    });
    res.status(500).json({
      success: false,
      massage: error._message,
      error: error,
    });
  }
});

exports.Grocerybyid = catchAsyncErrors(async (req, res, next) => {
  try {
    let grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(500).json({
        success: false,
        message: "grocery not found",
      });
    }
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAllDealOfTheDayBySuperCat = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({
      $and: [{ superCategoryId: req.params.id }, { Recommends: true }],
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAllHotProductsBySuperCat = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({
      $and: [{ superCategoryId: req.params.id }, { HotProducts: true }],
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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

exports.getAlltrendingProductsBySuperCat = catchAsyncErrors(
  async (req, res) => {
    try {
      const grocery = await Grocery.find({
        $and: [{ superCategoryId: req.params.id }, { Trending: true }],
      });
      res.status(200).json({
        success: true,
        grocery: grocery,
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
  }
);

exports.getAllOfferProductsBySuperCat = catchAsyncErrors(async (req, res) => {
  try {
    const grocery = await Grocery.find({
      $and: [{ superCategoryId: req.params.id }, { Offers: true }],
    });
    res.status(200).json({
      success: true,
      grocery: grocery,
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
