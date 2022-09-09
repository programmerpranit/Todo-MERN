import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({

    title: {type: String, required: true, default:""},
    description: {type: String, default:""},
    user: {type: String, required:true}

}, {timestamps: true})


mongoose.models = {}

export default mongoose.model("Todo", TodoSchema);
