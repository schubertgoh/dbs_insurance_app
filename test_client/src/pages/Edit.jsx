import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { Select, MenuItem } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  return (
  <div className="Login" style={{backgroundImage: "url(/src/assets/dbslogo3.png)"}}>
    
      <h1>Edit Claim</h1>
      <h3>Expense Date</h3>
      <TextField id="filled-basic" variant="outlined" className="login" type="date"  />
      <p></p>
      <h3>Amount:</h3>
      <TextField id="filled-basic" variant="outlined" className="login" />
      <p></p>
      <h3>Policy Type:</h3>
      <Select>
      <MenuItem value={1}>Travel</MenuItem>
      <MenuItem value={2}>Housing</MenuItem>
      <MenuItem value={3}>Personal Accident</MenuItem>
      <MenuItem value={4}>Car</MenuItem>
    </Select>
      <p></p>
      <h3>Purpose:</h3>
      <TextField id="filled-basic" variant="outlined" className="login" />
      <p></p>
      <Button type="submit">Submit</Button>
      <Button onClick={() => navigate("/Home")} type="back">Back</Button>


  </div>
  )
}

export default Add
