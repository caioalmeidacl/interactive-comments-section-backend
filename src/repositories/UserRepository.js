import { User } from "../models/User.js";

class UserRepository {
  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async getUsers() {
    return await User.find();
  }

  async create(userData) {
    const user = new User(userData);

    await user.save();
  }

  async findLikedComments(userId) {
    const allLikedComments = await User.findById(userId)
      .select("likedComments")
      .exec();

    return allLikedComments.likedComments;
  }
}

export { UserRepository };
