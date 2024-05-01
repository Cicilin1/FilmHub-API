import mongoose, { mongo } from "mongoose";

const categorySchema =  new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    type:{
        type: String,
        require: true,
    },
    CreatedAt:{
        type: Date,
        default: Date.now(),
    },

})

export default mongoose.model('Category', categorySchema)
