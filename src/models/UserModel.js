const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true }, //check quyền
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        city: {type: String}
    },
    {
        timestamps: true //Có thời gian tạo và update
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;