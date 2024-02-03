const UserModel = require("../models");
const mongoose = require("mongoose");
class UserService {
  async getAllUsers() {
    try {
      return await UserModel.find();
    } catch (error) {
      throw new Error(`Error in getAllUsers: ${error.message}`);
    }
  }

  async getUserById(userId) {
    try {
      return await UserModel.findById(userId);
    } catch (error) {
      throw new Error(`Error in getUserById: ${error.message}`);
    }
  }
  async createUser(userData) {
    try {
      return await UserModel.create(userData);
    } catch (error) {
      throw new Error(`Error in createUser: ${error.message}`);
    }
  }

  async updateUser(req) {
    let payload = {};
    try {
      if (req.body.email) Object.assign(payload, { email: req.body.email });
      if (req.body.name) Object.assign(payload, { name: req.body.name });
      const userId = new mongoose.Types.ObjectId(req.body._id);
      // Use updateOne to update the document
      const result = await UserModel.updateOne({ _id: userId }, payload);
      return result;
    } catch (error) {
      throw new Error(`Error in updateUser: ${error.message}`);
    }
  }

  async deleteUser(userId) {
    try {
      return await UserModel.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error(`Error in deleteUser: ${error.message}`);
    }
  }
}

module.exports = new UserService();
