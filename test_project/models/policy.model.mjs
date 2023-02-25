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
    InsuranceID:         Number,
    EmployeeID:          Number,
    InsuranceType:       String,
    PolicyStartDate:     String,
    PolicyTerm:          String,
    PolicyEndDate:       String,
    ClaimLimit:          Number,
    RemainingClaimLimit: Number
});

const Policy = mongoose.model('Policy', policySchema)

export default Policy

