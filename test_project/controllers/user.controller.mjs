import express from "express";
import db from "../db/connect.js";
import jwt from "jsonwebtoken"


const router = express.Router();

// Get a single post
router.get("/:id", async (req, res) => {
    try {
        let collection = await db.collection("users");
        let result = await collection.findOne({
            EmployeeID
                : parseInt(req.params.id)
        });
        if (!result) res.send(`User with id: ${req.params.id} Not found`).status(404);
        else res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});

router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({})
        .toArray();

    res.send(results).status(200);
});

router.post("/login", async function (req, res) {
    try {
        // check if the user exists
        let collection = await db.collection("users");
        let query = {
            EmployeeID
                : parseInt(req.body.id)
        };
        let user = await collection.findOne(query);
        console.log("User " + user.FirstName + user.LastName)
        //if user email is found, compare password with bcrypt
        if (user) {
            const isSame = await user.Password == req.body.password;
            console.log("passwordm ", isSame)

            //if password is the same
            //generate token with the user's id and the secretKey in the env file

            if (isSame) {
                let token = jwt.sign({ id: user.id }, process.env.secretKey, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });

                //if password matches wit the one in the database
                //go ahead and generate a cookie for the user
                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                console.log("user", JSON.stringify(user, null, 2));
                console.log(token);
                //send user data
                return res.json({
                    status: 201,
                    data: user,
                    token: token
                })
            } else {
                return res.json({
                    status: 401,
                    errorMessgae: "Authentication failed",
                });
            }
        } else {
            return res.json({
                status: 404,
                errorMessgae: "No Record found!",
            });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ error });
    }
});



export default router;