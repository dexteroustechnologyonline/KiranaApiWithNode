const express = require("express");
const {
  createEmployee,
  getAllEmployee,
  UpdateEmployee,
  DeleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();
router.route("/new").post(createEmployee);
router.route("/all").get(getAllEmployee);

router.route("/:id").put(UpdateEmployee);
router.route("/:id").delete(DeleteEmployee);

module.exports = router;
