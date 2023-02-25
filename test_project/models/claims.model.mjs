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
    claimID:            Number,
    insuranceID:        Number,
    firstName:          String,
    lastName:           String,
    expenseDate:        String,
    amount:             Decimal128,
    purpose:            String,
    followUp:           Boolean,
    previousClaimID:    Number,
    status:             String,
    lastEditedClaim:    String
});

const Claims = mongoose.model('Claims', claimsSchema)

export default Claims

