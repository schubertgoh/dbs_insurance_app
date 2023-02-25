import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
import "express-async-errors";
import user from "./controllers/user.controller.mjs";
import policy from "./controllers/policy.controller.mjs";
import claims from "./controllers/claims.controller.mjs";
import User from "./models/user.model.mjs"
import passport from "passport";
import bodyParser from "body-parser";
import LocalStrategy from "passport-local";
import passportLocalMongoose from "passport-local-mongoose"



const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load  routes
app.use("/user", user);
app.use(passport.initialize());
app.use(passport.session());
  
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use("/policy", policy)
app.use("/claims", claims)


// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});