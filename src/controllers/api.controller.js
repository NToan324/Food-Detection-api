const apiService = require("../services/api.service");
const food = {
  addFood: async (req, res) => {
    const data = req.body;
    try {
      const result = await apiService.addFood(data);
      if (result) {
        return res.status(200).send({
          errCode: 0,
          message: "Add food successful",
          data: result,
        });
      }
      return res.status(400).send({
        errCode: 1,
        message: "Data is empty",
      });
    } catch (error) {
      return res.status(400).send({
        errCode: 1,
        message: "Can not add food, error:" + error.message,
      });
    }
  },
  deleteFood: async (req, res) => {
    try {
      const result = await apiService.deleteFood();
      if (result) {
        return res.status(200).send({
          errCode: 0,
          message: "Delete food successful",
        });
      }
      return res.status(400).send({
        errCode: 1,
        message: "Can not delete food",
      });
    } catch (error) {
      return res.status(400).send({
        errCode: 1,
        message: "Can not delete food, error:" + error.message,
      });
    }
  },
  getFood: async (req, res) => {
    try {
      const result = await apiService.getFood();
      if (result) {
        return res.status(200).send({
          errCode: 0,
          message: "Get food successful",
          data: result,
        });
      }
      return res.status(400).send({
        errCode: 1,
        message: "Can not get food",
      });
    } catch (error) {
      return res.status(400).send({
        errCode: 1,
        message: "Can not get food, error:" + error.message,
      });
    }
  },
  getFoodById: async (req, res) => {
    const { id } = req.query;
    try {
      const result = await apiService.getFoodById(id);
      if (result) {
        return res.status(200).send({
          errCode: 0,
          message: "Get food by name successful",
          data: result,
        });
      }
      return res.status(400).send({
        errCode: 1,
        message: "Can not get food by name",
      });
    } catch (error) {
      return res.status(400).send({
        errCode: 1,
        message: "Can not get food by name, error:" + error.message,
      });
    }
  },
};

module.exports = food;
