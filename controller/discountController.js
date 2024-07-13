const discountSchema = require("../models/discountSchema");

function discountController(req,res){
    const {cash, percent, flat, product, category, subCategory} = req.body;

    if(cash , product){
      const discount = new discountSchema({
        cash,
        product,
    })
    discount.save();
    }else if (cash, category){
      const discount = new discountSchema({
        cash,
        category,
    })
    discount.save();
    }
    // const discount = new discountSchema({
    //     cash, 
    //     percent, 
    //     flat, 
    //     product, 
    //     category, 
    //     subCategory
    // })
    // discount.save();

    res.send({success: "discount create successful"})
}

async function getDiscountController(req,res){
  const data =await discountSchema.find({}).populate(["product", "category", "subCategory"])
  res.send(data)
}
module.exports = {discountController, getDiscountController}