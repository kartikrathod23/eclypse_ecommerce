// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/CartItem');

// Add item to cart
router.post('/add', async (req, res) => {
  const { productId, name, size, price, quantity } = req.body;

  try {
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [] });
    }

    const existingItem = cart.items.find(
      item => item.productId === productId && item.size === size
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, name, size, price, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
});

// Get cart items
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.status(200).json(cart ? cart.items : []);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
});

// Delete item from cart
router.delete('/:productId/:size', async (req, res) => {
  const { productId, size } = req.params;

  try {
    const cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(
      item => !(item.productId === productId && item.size === size)
    );

    await cart.save();
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
});


module.exports = router;
