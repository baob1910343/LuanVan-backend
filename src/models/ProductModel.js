const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        //duong link ảnh
        type: { type: String, required: true },
        // loại sp
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        //sl sản phẩm tồn trong kho
        rating: { type: Number, required: true },
        // số sao đánh giá sp đó
        description: { type: String },
        //mô tả sp đó
        discount: { type: Number },
        selled: { type: Number }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;