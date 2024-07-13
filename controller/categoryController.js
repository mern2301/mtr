const CategoryList = require("../models/categorySchema");
const subCategoryList = require("../models/subCategorySchema");

async function createCategoryController(req, res){
  const {name,description} = req.body;
  const duplicateCategory = await CategoryList.find({name});
  if(duplicateCategory.length > 0  ){
    res.json({error: 'This category already exists, try again'})
  }
  const category = new CategoryList({
    name,
    description
  })
  res.json({success: 'Category create successfully'})
  category.save();
}

async function categoryStatusController(req,res){
  const {name,status} = req.body;
 

  if(status == 'rejected' || status == "waiting"){
    const updatecategory = await CategoryList.findOneAndUpdate(
      {name},
      {$set: {isActive: false, status: status}},
      {new: true}
    )
  }else if(status == 'approved'){
    const updatecategory = await CategoryList.findOneAndUpdate(
      {name},
      {$set: {isActive: true, status: status}},
      {new: true}
    )
  }
  res.json({success: "Status updated"})
}

// SUB CategoryList


async function createSubCategoryController(req, res){
  const {name,description,category} = req.body;
  const duplicateCategory = await subCategoryList.find({name});
  if(duplicateCategory.length > 0  ){
    res.json({error: 'This category already exists, try again'})
  }
  const subCategory = new subCategoryList({
    name,
    description,
    category
  });
  console.log(subCategory._id);
  // console.log(subCategory.category);
  await CategoryList.findOneAndUpdate(
    {_id: subCategory.category},
    {$push: {subCategory: subCategory._id}},
    {new: true}
  )
  res.json({success: 'Sub Category create successfully'})
  subCategory.save();
}


async function subCategoryStatusController(req,res){
  const {name,status} = req.body;
 

  if(status == 'rejected' || status == "waiting"){
    const updatecategory = await subCategoryList.findOneAndUpdate(
      {name},
      {$set: {isActive: false, status: status}},
      {new: true}
    )
  }else if(status == 'approved'){
    const updatecategory = await subCategoryList.findOneAndUpdate(
      {name},
      {$set: {isActive: true, status: status}},
      {new: true}
    )
  }
  res.json({success: "Status updated"})
}


// get all category

async function getAllCategory(req,res){
  const data = await CategoryList.find({}).populate("subCategory")
  res.json(data)
}
async function getSubAllCategory(req,res){
  const data = await subCategoryList.find({})
  res.json(data)
}

module.exports = {createCategoryController, categoryStatusController, createSubCategoryController, subCategoryStatusController, getAllCategory,getSubAllCategory};