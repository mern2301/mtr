const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubCategorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description: String,
    isActive:{
        type: Boolean,
        default: false
    },
    status:{
        type: String,
        default: 'waiting',
        enum: ['waiting', 'rejected', 'approved']
    },
    category:{
      type: Schema.Types.ObjectId,
      ref: 'CategoryList'
    },
    created:{
        type: Date,
        default: new Date()
    },
    update:{
        type: Date
    }
})

module.exports = mongoose.model('SubCategoryList', SubCategorySchema)