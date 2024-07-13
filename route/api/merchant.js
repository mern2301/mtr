const express = require('express');
const { becomeMerchant, getAllStoreController } = require('../../controller/merchantController');
const router = express.Router();

router.post('/becomemerchant', becomeMerchant)
router.get("/allstore", getAllStoreController)

module.exports = router;