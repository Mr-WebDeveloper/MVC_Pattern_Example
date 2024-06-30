import userSchema from "../Model/userSchema.js";

export const userLogin = (req, res) => {

    const {name, email, phone} = req.body;

    console.log("REQUEST", name, email, phone);


    const newUser = new userSchema({
        name,
        email,
        phone
    });


    console.log(newUser);
    

    return newUser.save().then((savedUser) => {

        return res.status(200).json({
            status: true,
            message: "User Date stored Successfully",
        });
    })
    .catch((error) => {

        console.log(error);

        return res.status(200).json({
            status: false,
            message: "Internal Server Error",
        })
    })
};