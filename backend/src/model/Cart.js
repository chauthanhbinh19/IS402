import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      price: Number
    }],
    totalAmount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

 const Cart = mongoose.model('Cart', cartSchema);

 export default Cart;