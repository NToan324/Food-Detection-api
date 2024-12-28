const mongoose = require("mongoose");
const { Schema } = mongoose;

// Định nghĩa Schema cho Food
const foodSchema = new Schema({
  id: {
    type: String,
    required: [true, "ID is required"],
    unique: true,
  },
  foodName: {
    type: String,
    required: [true, "Food name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  location: {
    type: [String],
    required: [true, "Location is required"],
    validate: {
      validator: function (value) {
        return value.length > 0;
      },
      message: "At least one location must be provided",
    },
  },
  imgUrl: {
    type: [String],
    required: [true, "Image URL is required"],
    validate: {
      validator: function (value) {
        return value.length > 0;
      },
      message: "At least one image URL must be provided",
    },
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
