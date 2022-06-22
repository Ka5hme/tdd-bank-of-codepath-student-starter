import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction({form, setForm,handleOnSubmit, isCreating}) {
  const handleOnFormFieldChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm 
        form={form}
        handleOnFormFieldChange={handleOnFormFieldChange}
        handleOnSubmit={handleOnSubmit}
        isCreating={isCreating}
        />
    </div>
  )
}

export function AddTransactionForm({form, handleOnFormFieldChange, handleOnSubmit}){
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input onChange={handleOnFormFieldChange} type= "text" name="description" placeholder="description" value={form?.description} />
        </div>
        <div className="field">
          <label>Category</label>
          <input onChange={handleOnFormFieldChange} type= "text" name="category" placeholder="category" value={form?.category} />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input onChange={handleOnFormFieldChange} type= "number" name="amount" placeholder="amount" value={form?.amount} />
        </div>

        <button className="btn add-transaction" type="submit" onClick={handleOnSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}
