const express = require("express");
const {
  secureProduct,
  createProductController,
  createvariantController,
  getAllProductController,
  deleteProductController,
  getAllVariantController
} = require("../../controller/productController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + `.${file.originalname.split(".")[1]}`);
  },
});

const upload = multer({ storage: storage });
// router.post("/createproduct", secureProduct, createProductController);
router.post("/createproduct", createProductController);
router.post("/createvariant", upload.single("image"), createvariantController);
router.get("/allvariant",getAllVariantController)
router.get("/getallproduct", getAllProductController)
router.post("/deleteproduct", deleteProductController)
module.exports = router;
