class UserService {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    create(user) {
        if (this.userRepository.findByName(user.username)) throw new Error("Username already exists");

        return this.userRepository.create(user);
    }
}

export { UserService };