const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    // là mảng chứa tt sp đơn đặc hàng
    orderItems: [
        {
            name: { type: String, required: true },
            amount: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            discount: { type: Number },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            // populate mogo: kết hợp dữ liệu bảng product vào orderproduct
        },
    ],
    // địa chỉ giao hàng
    shippingAddress: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        phone: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    //phuong thuc thanh toan
    itemsPrice: { type: Number, required: true },
    //tong gia sp
    shippingPrice: { type: Number, required: true },
    // phí giao hang
    totalPrice: { type: Number, required: true },
    // tổng giá tiền
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    // đã thanh toan hay chua
    paidAt: { type: Date },
    // thanh toan lucc nao
    isDelivered: { type: Boolean, default: false },
    //đã giao hàng hay chua
    deliveredAt: { type: Date },
    // thoi gian giao hang vào lúc nào
},
    {
        timestamps: true,
    }
);
const Order = mongoose.model('Order', orderSchema);
module.exports = Order