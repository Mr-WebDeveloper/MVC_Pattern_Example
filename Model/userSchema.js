import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: String}
})

const userSchema = mongoose.model("user", userModel);

export default userSchema;