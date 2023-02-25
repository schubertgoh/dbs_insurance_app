import axios from "axios";
import React from "react";

const baseURL = "http://localhost:5050/claims/";


class claimsService {
    //const [policy, setPolicy] = useState([])

    getAllClaims(emloyeeID){
        try {
            return axios.get(baseURL + emloyeeID).then((response) =>{
                return response.data;
                //setPost(response.data);
            });
        }
        catch (e) {
        console.log("retreive employee claims failed!")
        console.log(e)
        }
    }

    createClaims(emloyeeID,claim,insurance,fname,lname,expenseDate,amt,purpose,
                  followUp,previousClaimID,status,lastEditedClaimDate){
      try {
          return axios.post(baseURL + emloyeeID, {
            ClaimID:            claim,
            InsuranceID:        insurance,
            FirstName:          fname,
            LastName:           lname,
            ExpenseDate:        expenseDate,
            Amount:             amt,
            Purpose:            purpose,
            FollowUp:           followUp,
            PreviousClaimID:    previousClaimID,
            Status:             status,
            LastEditedClaimDate:    lastEditedClaimDate,
            EmployeeID:         employeeID
          }).then((response) =>{
              return response.data;
              //setPost(response.data);
          });
      }
      catch (e) {
      console.log("retreive employee claims failed!")
      console.log(e)
      }
    }

    updateClaims(emloyeeID,claim,insurance,fname,lname,expenseDate,amt,purpose,
                  followUp,previousClaimID,status,lastEditedClaimDate){
      try {
          return axios.put(baseURL + "update/" + claim, {
            ClaimID:            claim,
            InsuranceID:        insurance,
            FirstName:          fname,
            LastName:           lname,
            ExpenseDate:        expenseDate,
            Amount:             amt,
            Purpose:            purpose,
            FollowUp:           followUp,
            PreviousClaimID:    previousClaimID,
            Status:             status,
            LastEditedClaimDate:    lastEditedClaimDate,
            EmployeeID:         employeeID
          }).then((response) =>{
              return response.data;
              //setPost(response.data);
          });
      }
      catch (e) {
      console.log("retreive employee claims failed!")
      console.log(e)
      }
  }

  deleteClaims(claimID){
    try {
        return axios.delete(baseURL + "delete/" + claimID).then(() =>{
            alert("Claim deleted!");
            //return response.data;
            //setPost(response.data);
        });
    }
    catch (e) {
    console.log("delete employee claims failed!")
    console.log(e)
    }
}
}

export default new claimsService();