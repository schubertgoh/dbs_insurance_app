import axios from "axios";
import React from "react";

const baseURL = "http://localhost:5050/policy/";


class policyService {
    //const [policy, setPolicy] = useState([])

    getAllPolicy(emloyeeID){
        try {
            return axios.get(baseURL + emloyeeID).then((response) =>{
                return response.data;
                //setPost(response.data);
            });
        }
        catch (e) {
        console.log("retreive employee policy failed!")
        console.log(e)
        }
    }

    getOnePolicy(emloyeeID,policyID){
        try {
            return axios.get(baseURL + emloyeeID +"/"+ policyID).then((response) =>{
                return response.data;
            });
        }
        catch (e) {
        console.log("retreive employee policy failed!")
        console.log(e)
        }
    }

}

/*
export default function App() {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
*/

export default new policyService();