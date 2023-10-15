const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, required: true, unique: true },
        // email là duy nhất
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        //xét quyền
        phone: { type: Number },
        address: { type: String },
        avatar: { type: String },
        city: {type: String}
    },
    {
        timestamps: true
        // ghi nhận thoi gian tạo và update
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;