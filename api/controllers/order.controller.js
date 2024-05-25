import path from 'path';

console.log('Resolved Path for Order:', path.resolve('./models/order.model.js'));
console.log('Resolved Path for Gig:', path.resolve('./models/gig.model.js'));

import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";


    export const createOrder = async (req, res, next) => {
      try {
        const gig = await Gig.findById(req.params.gigId);
    
        if (!gig) {
          return res.status(404).send("Gig not found");
        }
    
        if (!req.userId) {
          return res.status(400).send("User ID is required.");
        }
    
        const newOrder = new Order({
          gigId: gig._id,
          img: gig.cover,
          title: gig.title,
          buyerId: req.userId,
          sellerId: gig.userId,
          price: gig.price,
          payment_intent: "temporary"
        });
    
        await newOrder.save();
        res.status(200).send("Order created successfully");
      } catch (err) {
        next(err);
      }
    };
    

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ 
      ...(req.isSeller ? {sellerIF:req.userId}  : {buyerId: req.userId}),
      isCompleted: true, 
    });
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
