const mongoose = require("mongoose");

const groceySchema = mongoose.Schema({
  ItemName: {
    type: String,
  },
  Url: {
    type: String,
    required: [true, "Please provide Url"],
    // unique: [true, "Url already exist"],
    trim: true,
  },
  superCategoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Supercategory",
  },

  superCategory: {
    type: String,
  },
  Category: {
    type: String,
  },
  CatId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Category Id Required"],
    ref: "Category",
  },
  SubCat: {
    type: String,
    required: [true, "Please enter Sub-Category"],
  },
  SubCatId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "subCategoryId Required"],
    ref: "Subcategory",
  },
  KeyWords: {
    type: String,
    default: "",
  },
  Description: {
    type: String,
    default: "",
  },
  Title: {
    type: String,
    default: "",
  },

  About: {
    type: String,
    default: "",
  },
  Ingredient: {
    type: String,
    default: "",
  },
  ProductInfo: {
    type: String,
    default: "",
  },

  Type: {
    type: String,
    default: "",
  },
  Rating: {
    type: Number,
    default: "",
  },
  Brand: {
    type: String,
    // required: [true, "Please enter brand name"],
  },
  Options: {
    type: String,
  },

  Recommends: {
    type: Boolean,
    default: false,
  },
  HotProducts: {
    type: Boolean,
    default: false,
  },
  Trending: {
    type: Boolean,
    default: false,
  },
  Offers: {
    type: Boolean,
    default: false,
  },
  Multi: {
    type: Boolean,
    default: false,
  },
  Single: {
    type: Boolean,
    default: false,
  },

  Cashback: {
    type: Boolean,
    default: false,
  },
  Pcb1: {
    type: Number,
    default: "1",
  },
  Pcb2: {
    type: Number,
    default: "2",
  },
  Pcb3: {
    type: Number,
    default: "3",
  },
  ProductId: {
    type: String,
  },

  PackSizes: [
    {
      PackSize: {
        type: String,
      },
      ImgUrlDeskTiles: {
        type: String,
      },
      ImgUrlMbl: {
        type: String,
        default: "",
        // required: [true, "Please provide mobileImage"],
      },
      ImgUrlMblIcon: {
        type: String,
        // required: [true, "Please provide mobileImage Icon"],
        default: "",
      },
      ImgUrlDesk: {
        type: String,
        // required: [true, "Please provide desktopImage"],
        default: "",
      },
      ImgUrlDeskIcon: {
        type: String,
        // required: [true, "Please provide desktopImage Icon"],
        default: "",
      },
      CostPrc: {
        type: Number,
        default: 0,
      },
      GstCost: {
        type: Number,
        default: 18,
      },
      SellingPrice: {
        type: Number,
        // required: [true, "Please provide sellingPrice"],
      },
      GstSellPrc: {
        type: Number,
        default: 0,
      },
      Mrp: {
        type: Number,
        // required: [true, "Please provide sellingPrice"],
      },
      HotProducts: {
        type: Boolean,
        default: false,
      },
      Trending: {
        type: Boolean,
        default: false,
      },

      OutOfStack: {
        type: Boolean,
        default: false,
      },
      Pri: {
        type: Boolean,
        default: false,
      },
      StockAutoUpdate: {
        type: Boolean,
        default: false,
      },
      Discount: {
        type: Number,
        default: 0,
      },
      CartQuantity: {
        type: Number,
        default: 0,
      },
      maximumQuantity: {
        type: Number,
        default: 10,
      },
    },
  ],
  UniversalTag: String,
  CategoryTag: String,
  BannerTag: String, // ramadan, holi, christmus

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Grocery", groceySchema);
