const express = require('express');
const {createCategoryController,categoryStatusController, createSubCategoryController, subCategoryStatusController, getAllCategory, getSubAllCategory} = require('../../controller/categoryController');
const router = express.Router();


 router.post('/createcategory', createCategoryController);
 router.post('/statuscategory', categoryStatusController);
 router.post('/createsubcategory', createSubCategoryController);
 router.post('/statussubcategory', subCategoryStatusController);
router.get('/getallcategory', getAllCategory)
router.get('/getallsubcategory', getSubAllCategory)
module.exports = router;