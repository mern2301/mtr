const Store = require("../models/merchantSchema");
const Userlist = require("../models/userSchema");

async function becomeMerchant(req, res) {
    console.log("ami merchant");
    const { storename, officialemail, officialphone, address, owner, products } = req.body;

    console.log(storename, officialemail, officialphone, address, owner, products);
    const store = new Store({
        storename,
        officialemail,
        officialphone,
        address,
        owner,
        products
    })
    store.save();

    await Userlist.findOneAndUpdate(
        { _id: owner },
        { role: "merchant" },
        { new: true }
    )
    //    res.json({success: 'You are become a merchant. Congratulations'});
    res.json(store)
}

async function getAllStoreController(req, res) {
    const data = await Store.find({});
    res.send(data)
}


module.exports = { becomeMerchant, getAllStoreController };