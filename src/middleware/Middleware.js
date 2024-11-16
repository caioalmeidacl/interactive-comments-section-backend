import jsonwebtoken from "jsonwebtoken";
import 'dotenv/config';

function middleware(request, response, next) {
    const token = request.header("Authorization")?.split(" ")[1];
    
    if(!token) return response.status(401).json({ message: "Access denied"});

    try {        
        const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        request.user = verified;
        next();
    } catch(error) {
        return response.status(403).json({ message: "Invalid token"});
    }
}


export { middleware }