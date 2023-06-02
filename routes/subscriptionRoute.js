const express = require("express");
const {
  createSubscription,
  getAllSubscription,
  UpdateSubscription,
  DeleteSubscription,
  SlugUrlExist,
  UploadSubscriptionImage,
  subscriptionbyid,
} = require("../controllers/subscriptionController");

const router = express.Router();
router.route("/new").post(createSubscription);
router.route("/all").get(getAllSubscription);

router.route("/slugurl/:slugurl").get(SlugUrlExist);
router.route("/subscriptionbyid/:id").get(subscriptionbyid);
router.route("/subscriptionimages").post(UploadSubscriptionImage);
router.route("/subscriptionupdate/:id").put(UpdateSubscription);
router.route("/subscriptiondelete/:id").delete(DeleteSubscription);

module.exports = router;
