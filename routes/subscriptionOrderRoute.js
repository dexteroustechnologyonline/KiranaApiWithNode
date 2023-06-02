const express = require("express");

const {
  createSubscriptionOrder,
  getAllSubscriptionOrder,
  updateSubscriptionOrder,
  subscriptionOrderByClientId,
} = require("../controllers/subscriptionOrderController");

const router = express.Router();

router.route("/new").post(createSubscriptionOrder);
router.route("/all").get(getAllSubscriptionOrder);
router.route("/suborderbyclientid/:id").get(subscriptionOrderByClientId);
router.route("/:id").put(updateSubscriptionOrder);

module.exports = router;
