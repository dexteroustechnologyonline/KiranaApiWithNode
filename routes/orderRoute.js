const express = require("express");

const {
  createOrder,
  getAllOrder,
  UpdateOrder,
  OrderByClientId,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/new").post(createOrder);
router.route("/all").get(getAllOrder);
router.route("/orderbyclientid/:id").get(OrderByClientId);
router.route("/:id").put(UpdateOrder);

module.exports = router;