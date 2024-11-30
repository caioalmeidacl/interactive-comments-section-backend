import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_BANCO_DADOS);
        console.log("database conected");
    } catch(error) {
        console.log(error);
    }
};

export default connectDB;