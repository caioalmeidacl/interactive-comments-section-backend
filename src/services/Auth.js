import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

class AuthService {
  constructor(userRepository) {
    this.userRepository = new userRepository();
  }

  async login(username, password) {
    const user = await this.userRepository.findByUsername(username);

    if (!user) throw new Error("Username not found!");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error("Invalid password");

    const access_token = jsonwebtoken.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
    );

    return { access_token };
  }

  async getUserLogged(request) {
    const token = request.header("Authorization")?.split(" ")[1];

    const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    const profilePicture = await this.userRepository.getProfilePicture(
      verified.id,
    );

    const user = {
      id: verified.id,
      username: verified.username,
      profilePicture,
    };

    return { user };
  }
}

export { AuthService };
