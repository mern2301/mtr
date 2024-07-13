const productSchema = require("../models/productSchema");
const Userlist = require("../models/userSchema");
const variantSchema = require("../models/variantSchema");

async function secureProduct(req, res, next) {
  const userid = req.headers.authorization.split("@")[1];
  const password = req.headers.authorization.split("@")[2];

  if (!req.headers.authorization) {
    return res.json({ err: "UNAUTHORIZATION" });
  } else {
    const user = await Userlist.find({ _id: userid });
    if (user.length > 0) {
      if (password == "1vfe$3XOn=y3") {
        if (user[0].role == "merchant") {
          next();
        }
      } else {
        res.json({ erroe: "u r not able to upload" });
      }
    } else {
      res.json({ erroe: "u r not able to upload" });
    }
  }
}

function createProductController(req, res) {
  const { name, description, store } = req.body;

  const product = new productSchema({
    name,
    description,
    store,
  });
  product.save();
  res.json({ success: "product created successfully done" });
}

async function createvariantController(req, res) {
  const { image, color, storage, ram, price, quantity, size, product } =
    req.body;
  console.log(req.file.filename);
    const variant = new variantSchema({
      image: `http://localhost:3000/uploads/${req.file.filename}`,
      color,
      storage,
      ram,
      price,
      quantity,
      size,
      product,
    });
    variant.save();

    await productSchema.findOneAndUpdate(
      { _id: variant.product },
      { $push: { variants: variant._id } },
      { new: true }
    );
    res.send({success: "Variant create successfully done"})
}

async function getAllProductController(req,res){
  const product = await productSchema.find({}).populate("store")
  res.send(product)
}

async function deleteProductController(req, res){
  console.log(req.body.id);
  const data = await productSchema.findByIdAndDelete(req.body.id)
  res.send(data)
}

async function getAllVariantController(req,res){
  const data = await variantSchema.find({}).populate("product")
  res.send(data)
}

module.exports = {
  secureProduct,
  createProductController,
  createvariantController,
  getAllProductController,
  deleteProductController,
  getAllVariantController
};
