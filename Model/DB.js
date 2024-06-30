import mongoose from "mongoose";

const connectDatabase = () => {
    return mongoose.connect('mongodb+srv://muthu:Mkmk2020@cluster0.koo7gtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database Created Successfully");
    })
    .catch((error) => {
        console.log("Error While Creating Database", error);
    })
}

export default connectDatabase;