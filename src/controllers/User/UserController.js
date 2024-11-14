class UserController { 
    constructor(userService){
        this.userService = userService;
    }

    create(request, response) {
        const user = request.body;

        this.userService.create(user);

        return response.status(201).send();
    }
}


export { UserController };