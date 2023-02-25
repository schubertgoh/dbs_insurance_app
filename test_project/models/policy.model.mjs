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

const policySchema = new mongoose.Schema({
    insuranceID:         Number,
    employeeID:          Number,
    instuanceType:       String,
    policyStartDate:     String,
    policyTerm:          String,
    policyEndDate:       String,
    claimLimit:          Decimal128,
    remainingClaimLimit: Decimal128
});

const Policy = mongoose.model('Policy', policySchema)

export default Policy

