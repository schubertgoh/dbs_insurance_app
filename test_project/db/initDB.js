import User from '../models/user.model.mjs'
import Policy from '../models/policy.model.mjs'
import Claims from '../models/claims.model.mjs'
import mongoose from 'mongoose';
import "../loadEnvironment.js";

const param = process.env.ATLAS_URI || "";
console.log('Now initing DB' + param)
mongoose
    .connect(param, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(error));

/* drop users collections */
mongoose.connection.dropCollection('users', function (err) {
    /* show messages */
    if (err) {
        if (err.code === 26) console.log('-- users collection does not exists');
        else throw err;
    }
    else console.log("-- users collection dropped");

    /* insert data of users */
    User.create(userData, function (err, users) {
        if (err) throw err;
        console.log(users + '\n-- users inserted successfully');
    });
});


/* drop policy collections */
mongoose.connection.dropCollection('policies', function (err) {
    if (err) {
        if (err.code === 26) console.log('-- policy collection does not exists');
        else throw err;
    }
    else console.log("-- policy collection dropped");


    Policy.create(policyData, function (err, items) {
        if (err) throw err;
        console.log(items + '\n-- policy inserted successfully');
    });
    /* insert post */
});// END drop collections

/* drop claims collections */
mongoose.connection.dropCollection('claims', function (err) {
    /* show messages */
    if (err) {
        if (err.code === 26) console.log('-- claims collection does not exists');
        else throw err;
    }
    else console.log("-- claims collection dropped");

    /* insert data of users */
    Claims.create(claimsData, function (err, users) {
        if (err) throw err;
        console.log(users + '\n-- claims inserted successfully');
    });
});
/* data to be inserted */
const userData = [
    {
        "EmployeeID": 58001001,
        "Password": "iLoveTT!23",
        "FirstName": "Irene",
        "LastName": "Lim",
        "Age": 27
       },
       {
        "EmployeeID": 58001002,
        "Password": "DBSB#stB4nk",
        "FirstName": "Mary",
        "LastName": "Lee",
        "Age": 35
       },
       {
        "EmployeeID": 58001003,
        "Password": "JoinSEED20@3",
        "FirstName": "John",
        "LastName": "Tan",
        "Age": 38
       },
       {
        "EmployeeID": 58001004,
        "Password": "LiveM0reb$nk1ess",
        "FirstName": "Martin",
        "LastName": "Ong",
        "Age": 43
       },
       {
        "EmployeeID": 58001005,
        "Password": "J4vaPyth0nSq!",
        "FirstName": "Sean",
        "LastName": "Chia",
        "Age": 52
       }
];

const policyData = [
    {
        "InsuranceID": 1005,
        "EmployeeID": 58001002,
        "InsuranceType": "Personal Accident",
        "PolicyStartDate": "2022-03-31T00:00:00+08:00",
        "PolicyTerm": "12 months",
        "PolicyEndDate": "2023-03-31T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 400.00
       },
       {
        "InsuranceID": 1006,
        "EmployeeID": 58001002,
        "InsuranceType": "Housing",
        "PolicyStartDate": "2022-03-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-03-31T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1007,
        "EmployeeID": 58001002,
        "InsuranceType": "Car",
        "PolicyStartDate": "2022-03-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-03-31T00:00:00+08:00",
        "ClaimLimit": 25000.00,
        "RemainingClaimLimit": 20000.00
       },
       {
        "InsuranceID": 1008,
        "EmployeeID": 58001003,
        "InsuranceType": "Personal Accident",
        "PolicyStartDate": "2022-05-31T00:00:00+08:00",
        "PolicyTerm": "3 months",
        "PolicyEndDate": "2022-08-31T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 800.00
       },
       {
        "InsuranceID": 1009,
        "EmployeeID": 58001004,
        "InsuranceType": "Personal Accident",
        "PolicyStartDate": "2022-05-31T00:00:00+08:00",
        "PolicyTerm": "12 months",
        "PolicyEndDate": "2023-05-31T00:00:00+08:00",
        "ClaimLimit": 5000,
        "RemainingClaimLimit": 4600
       },
       {
        "InsuranceID": 1010,
        "EmployeeID": 58001004,
        "InsuranceType": "Housing",
        "PolicyStartDate": "2022-05-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-05-31T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1011,
        "EmployeeID": 58001003,
        "InsuranceType": "Car",
        "PolicyStartDate": "2022-07-31T00:00:00+08:00",
        "PolicyTerm": "12 months",
        "PolicyEndDate": "2023-07-31T00:00:00+08:00",
        "ClaimLimit": 25000.00,
        "RemainingClaimLimit": 25000.00
       },
       {
        "InsuranceID": 1012,
        "EmployeeID": 58001004,
        "InsuranceType": "Car",
        "PolicyStartDate": "2022-09-30T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-09-30T00:00:00+08:00",
        "ClaimLimit": 25000.00,
        "RemainingClaimLimit": 25000.00
       },
       {
        "InsuranceID": 1013,
        "EmployeeID": 58001001,
        "InsuranceType": "Housing",
        "PolicyStartDate": "2022-11-30T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-11-30T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1014,
        "EmployeeID": 58001005,
        "InsuranceType": "Travel",
        "PolicyStartDate": "2023-01-31T00:00:00+08:00",
        "PolicyTerm": "1 month",
        "PolicyEndDate": "2023-02-28T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 1000.00
       },
       {
        "InsuranceID": 1015,
        "EmployeeID": 58001005,
        "InsuranceType": "Housing",
        "PolicyStartDate": "2023-01-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2025-01-31T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1016,
        "EmployeeID": 58001001,
        "InsuranceType": "Travel",
        "PolicyStartDate": "2023-01-31T00:00:00+08:00",
        "PolicyTerm": "1 month",
        "PolicyEndDate": "2023-02-28T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 900.00
       }
];

const claimsData = [
    {
     "ClaimID": 2010,
     "InsuranceID": 1009,
     "FirstName": "Martin",
     "LastName": "Ong",
     "ExpenseDate": "2022-07-14T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Dentist",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-07-15T12:22:45+08:00"
    },
    {
     "ClaimID": 2011,
     "InsuranceID": 1008,
     "FirstName": "John",
     "LastName": "Tan",
     "ExpenseDate": "2022-08-15T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Outpatient Claim",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-08-16T19:35:53+08:00"
    },
    {
     "ClaimID": 2012,
     "InsuranceID": 1005,
     "FirstName": "Mary",
     "LastName": "Lee",
     "ExpenseDate": "2022-08-16T08:00:00+08:00",
     "Amount": 200.00,
     "Purpose": "Specialist Visit",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-08-17T12:28:46+08:00"
    },
    {
     "ClaimID": 2013,
     "InsuranceID": 1007,
     "FirstName": "Mary",
     "LastName": "Lee",
     "ExpenseDate": "2022-08-18T08:00:00+08:00",
     "Amount": 5000.00,
     "Purpose": "Car Repairs",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-08-19T11:16:32+08:00"
    },
    {
     "ClaimID": 2014,
     "InsuranceID": 1008,
     "FirstName": "John",
     "LastName": "Tan",
     "ExpenseDate": "2022-08-20T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Outpatient Claim",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-08-29T16:42:51+08:00"
    },
    {
     "ClaimID": 2015,
     "InsuranceID": 1009,
     "FirstName": "Martin",
     "LastName": "Ong",
     "ExpenseDate": "2022-09-02T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Outpatient Claim",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Rejected",
     "LastEditedClaimDate": "2022-09-03T10:30:00+08:00"
    },
    {
     "ClaimID": 2016,
     "InsuranceID": 1008,
     "FirstName": "John",
     "LastName": "Tan",
     "ExpenseDate": "2022-09-04T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Outpatient Claim",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Rejected",
     "LastEditedClaimDate": "2022-09-05T13:25:29+08:00"
    },
    {
     "ClaimID": 2017,
     "InsuranceID": 1005,
     "FirstName": "Mary",
     "LastName": "Lee",
     "ExpenseDate": "2022-10-08T08:00:00+08:00",
     "Amount": 200.00,
     "Purpose": "Specialist Visit Follow Up",
     "FollowUp": 1,
     "PreviousClaimID": 2013,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-10-09T13:08:24+08:00"
    },
    {
     "ClaimID": 2018,
     "InsuranceID": 1011,
     "FirstName": "John",
     "LastName": "Tan",
     "ExpenseDate": "2022-10-10T08:00:00+08:00",
     "Amount": 3000.00,
     "Purpose": "Aircon Repair",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Pending",
     "LastEditedClaimDate": "2022-10-15T17:45:52+08:00"
    },
    {
     "ClaimID": 2019,
     "InsuranceID": 1009,
     "FirstName": "Martin",
     "LastName": "Ong",
     "ExpenseDate": "2022-10-26T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Dentist",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2022-10-28T13:08:24+08:00"
    },
    {
     "ClaimID": 2020,
     "InsuranceID": 1009,
     "FirstName": "Martin",
     "LastName": "Ong",
     "ExpenseDate": "2023-01-03T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Outpatient Claim",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2023-01-05T12:53:04+08:00"
    },
    {
     "ClaimID": 2021,
     "InsuranceID": 1011,
     "FirstName": "John",
     "LastName": "Tan",
     "ExpenseDate": "2022-12-20T08:00:00+08:00",
     "Amount": 2000.00,
     "Purpose": "Engine Repair",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2023-01-06T11:24:32+08:00"
    },
    {
     "ClaimID": 2022,
     "InsuranceID": 1005,
     "FirstName": "Mary",
     "LastName": "Lee",
     "ExpenseDate": "2023-01-09T08:00:00+08:00",
     "Amount": 200.00,
     "Purpose": "Specialist Visit Follow Up",
     "FollowUp": 1,
     "PreviousClaimID": 2017,
     "Status": "Approved",
     "LastEditedClaimDate": "2023-01-09T17:23:56+08:00"
    },
    {
     "ClaimID": 2023,
     "InsuranceID": 1016,
     "FirstName": "Irene",
     "LastName": "Lim",
     "ExpenseDate": "2023-02-11T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Overseas Injury",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2023-02-16T15:32:24+08:00"
    },
    {
     "ClaimID": 2024,
     "InsuranceID": 1009,
     "FirstName": "Martin",
     "LastName": "Ong",
     "ExpenseDate": "2023-02-23T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Dentist",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Pending",
     "LastEditedClaimDate": "2023-02-25T17:33:58+08:00"
    },
    {
     "ClaimID": 2027,
     "InsuranceID": 1016,
     "FirstName": "Irene",
     "LastName": "Lim",
     "ExpenseDate": "2023-02-11T08:00:00+08:00",
     "Amount": 200.00,
     "Purpose": "Lost Baggage",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Pending",
     "LastEditedClaimDate": "2023-02-25T17:39:42+08:00"
    },
    {
     "ClaimID": 2028,
     "InsuranceID": 1016,
     "FirstName": "Irene",
     "LastName": "Lim",
     "ExpenseDate": "2023-02-28T08:00:00+08:00",
     "Amount": 50.00,
     "Purpose": "Overseas Injury Follow Up Treatment",
     "FollowUp": 1,
     "PreviousClaimID": 2023,
     "Status": "Pending",
     "LastEditedClaimDate": "2023-02-28T17:33:58+08:00"
    },
    {
     "ClaimID": 2025,
     "InsuranceID": 1015,
     "FirstName": "Sean",
     "LastName": "Chia",
     "ExpenseDate": "2023-02-28T08:00:00+08:00",
     "Amount": 10000.00,
     "Purpose": "Repairs Due to Fire From Neighbor",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Pending",
     "LastEditedClaimDate": "2023-03-01T10:00:00+08:00"
    },
    {
     "ClaimID": 2026,
     "InsuranceID": 1009,
     "FirstName": "Martin",
     "LastName": "Ong",
     "ExpenseDate": "2023-03-10T08:00:00+08:00",
     "Amount": 100.00,
     "Purpose": "Outpatient Claim",
     "FollowUp": 0,
     "PreviousClaimID": null,
     "Status": "Approved",
     "LastEditedClaimDate": "2023-03-11T00:00:00+08:00"
    }
];
