import mongoose, { mongo } from "mongoose";

const movieSchema =  new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    imageSmall:{
        type: String,
        require: true,
    },
    imageBanner:{
        type: String,
        require: true,
    },
    linkVideo:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    CreatedAt:{
        type: Date,
        default: Date.now(),
    },

})

export default mongoose.model('Movie', movieSchema)
