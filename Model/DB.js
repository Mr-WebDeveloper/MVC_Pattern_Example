import mongoose from "mongoose";

const connectDatabase = () => {
    return mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log("Database Created Successfully");
    })
    .catch((error) => {
        console.log("Error While Creating Database", error);
    })
}

export default connectDatabase;