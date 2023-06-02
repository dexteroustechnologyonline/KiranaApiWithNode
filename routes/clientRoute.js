const express = require("express");
const {
  createClient,
  getAllClient,
  UpdateCLient,
  UpdateCLientAddress,
  clientById,
  DeleteClient,
  loginClient,
} = require("../controllers/clientController");


const router = express.Router();
router.route("/new").post(createClient);
router.route("/loginclient").post(loginClient);
router.route("/all").get(getAllClient);
router.route("/Clientid/:id").put(UpdateCLient);
router.route("/address").put(UpdateCLientAddress);
router.route("/clientbyid/:id").get(clientById);
router.route("/clientdelete/:id").delete(DeleteClient);
module.exports = router;
