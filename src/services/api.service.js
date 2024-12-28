const Food = require("../models/food.model");

const foodService = {
  addFood: async (data) => {
    try {
      if (!data || data.length === 0) {
        throw new Error("Data is empty or not an array");
      }
      const newFood = await Food.insertMany(data);
      return newFood;
    } catch (error) {
      throw new Error("Failed to add food data: " + error.message);
    }
  },
  deleteFood: async () => {
    try {
      const result = await Food.deleteMany({});
      if (result.acknowledged) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error("Failed to delete food data: " + error.message);
    }
  },
  getFood: async () => {
    try {
      const result = await Food.find({});
      return result;
    } catch (error) {
      throw new Error("Failed to get food data: " + error.message);
    }
  },
  getFoodById: async (id) => {
    try {
      if (!id) {
        throw new Error("Name is empty");
      }
      const result = await Food.find({ id: id });
      if (result.length === 0) {
        return [];
      }
      return result;
    } catch (error) {
      throw new Error("Failed to get food data by name: " + error);
    }
  },
};

module.exports = foodService;
