import express from "express";
import db from "../db/connect.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// create new claims 
router.post("/", async (req, res) => {
    let collection = await db.collection("claims");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});


// Get all claims of a employee
router.get("/:employeeID", async (req, res) => {
    let collection = await db.collection("claims");
    let results = await collection.find({"EmployeeID":parseInt(req.params.employeeID)})
        .toArray();

    if (!results) res.send("Not found").status(404);
        else res.send(results).status(200);
    //res.send(results).status(200);
    //return res.json(getStandardResponse(true, "", results))
});

/*
// Get a specific policy of a employee
router.get("/:employeeID/:policyID", async (req, res) => {
    try {
        let collection = await db.collection("policies");
        let query = {  
                        "EmployeeID": parseInt(req.params.employeeID), 
                        "InsuranceID": parseInt(req.params.policyID)
                    };
        let result = await collection.findOne(query);
        if (!result) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});
*/

// Edit claim record 
router.put("/update/:claimID", async (req, res) => {
    try {
        const query = { "ClaimID": parseInt(req.params.claimID)};
        const updates = {
            "$set": {
                //desc: req.body.desc,
                //code: req.body.code,
                ClaimID:            req.body.ClaimID,
                InsuranceID:        req.body.InsuranceID,
                FirstName:          req.body.FirstName,
                LastName:           req.body.LastName,
                ExpenseDate:        req.body.ExpenseDate,
                Amount:             req.body.Amount,
                Purpose:            req.body.Purpose,
                FollowUp:           req.body.FollowUp,
                PreviousClaimID:    req.body.PreviousClaimID,
                Status:             req.body.Status,
                LastEditedClaim:    new Date(),
                EmployeeID:         req.body.EmployeeID
            }
        }

        let collection = await db.collection("claims");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});


// Delete an entry
router.delete("/delete/:claimID", async (req, res) => {
    try {
        const query = { "ClaimID": parseInt(req.params.claimID) };

        const collection = db.collection("claims");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});


export default router;
