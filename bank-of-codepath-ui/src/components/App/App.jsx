import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"


export default function App() {

  const [isLoading, setIsLoading]=React.useState(false)
  const [transactions, setTransactions]=React.useState([])
  const [error, setError]=React.useState(null)
  const [transfers, setTransfers]=React.useState([])
  const [filterInputValue, setFilterInputValue]=React.useState("")
  const [newTransactionForm, setNewTransactionForm]=React.useState({description:"", category:"", amount:0})
  const [isCreating, setIsCreating]=React.useState(false)

  return (
    <div className="App">
      <nav className="app">
      <BrowserRouter>

        <Navbar 
          filterInputValue={filterInputValue} 
          setFilterInputValue={setFilterInputValue}  
          />

        <main>
          <Routes>
            <Route
              path="/"
              element ={
                <Home 
                  transactions={transactions} 
                  setTransactions={setTransactions} 
                  transfers={transfers} 
                  setTransfers={setTransfers} 
                  error={error} 
                  setError={setError}
                  filterInputValue={filterInputValue} 
                  isLoading={isLoading} 
                  setIsLoading={setIsLoading}
                  newTransactionForm={newTransactionForm} 
                  setNewTransactionForm={setNewTransactionForm} 
                  isCreating={isCreating}
                  setIsCreating={setIsCreating}
                  
                  />
              }
            />
            <Route
              path="/transactions/:transcactionId"
              element={
                <TransactionDetail />
              }
            />
          </Routes>
          
        </main>
      
      </BrowserRouter>
      
      </nav> 
    </div>
  )
}
