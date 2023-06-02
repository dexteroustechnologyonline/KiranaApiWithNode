const express = require("express");
const {
    createAdmin,loginAdminwithpassword,mobileExist,emailExist
} = require("../controllers/adminController");

const router = express.Router();
router.route("/register").post(createAdmin);
router.route("/login").post(loginAdminwithpassword);
router.route("/mobile/:mobile").get(mobileExist);
router.route("/email/:email").get(emailExist);


module.exports = router;
