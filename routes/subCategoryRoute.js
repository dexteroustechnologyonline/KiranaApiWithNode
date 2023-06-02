const express = require("express");
const {
  createSubCategory,
  getAllSubCategory,
  UpdateSubCategory,
  DeleteSubCategory,
  SubCatSlugUrlExist,
  UploadSubCategoryImage,
  subcategorybycatid,
  subcatbyid,
} = require("../controllers/subCategoryController");

const router = express.Router();
router.route("/new").post(createSubCategory);
router.route("/all").get(getAllSubCategory);

router.route("/slugurl/:slugurl").get(SubCatSlugUrlExist);
router.route("/subcatbyid/:id").get(subcatbyid);

router.route("/subcategoryimages").post(UploadSubCategoryImage);
router.route("/subcategoryid/:id").get(subcategorybycatid);
router.route("/:id").put(UpdateSubCategory);
router.route("/:id").delete(DeleteSubCategory);
module.exports = router;
