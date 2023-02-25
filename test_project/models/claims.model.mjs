import mongoose from 'mongoose';

/*
const itemSchema = new mongoose.Schema({
    name: String,
    desc: String,
    code: String,
    photo: String
});

const Item = mongoose.model('Item', itemSchema);

export default Item 
*/

const claimsSchema = new mongoose.Schema({
    ClaimID:            Number,
    InsuranceID:        Number,
    FirstName:          String,
    LastName:           String,
    ExpenseDate:        String,
    Amount:             Number,
    Purpose:            String,
    FollowUp:           Boolean,
    PreviousClaimID:    Number,
    Status:             String,
    LastEditedClaim:    String
});

const Claims = mongoose.model('Claims', claimsSchema)

export default Claims

