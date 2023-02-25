const Add = () => {


  return (
    <div>
      <h1 className="header">Add Claim</h1>
      <form className="form">
      <fieldset>
         <label>
           <p>Expense Date</p>
           <input name="Expense Date" type="date" />
         </label>
       </fieldset>
    
       <fieldset>
         <label>
           <p>Amount</p>
           <input name="Claim Amount" type="text" />
         </label>
       </fieldset>
    
       <fieldset>
         <label>
           <p>Purpose</p>
           <input name="Purpose" type="text" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
       </form>

    </div>
  )
}

export default Add
