const mongoose =require('mongoose');

const ReviewSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, },
  product_id: { type: Number, required: true },
  rate: { type: Number, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  country: { type: String, required: true },
  text: { type: String, required: true }
});

const Review = mongoose.model("Review",ReviewSchema)
module.exports= Review
