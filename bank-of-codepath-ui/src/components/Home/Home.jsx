import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import axios from "axios";


export default function Home({filterInputValue, newTransactionForm, setNewTransactionForm, isCreating, setIsCreating, isLoading, setIsLoading, transactions, setTransactions, error, setError}) {

  const transactionsRes = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        "http://localhost:3001/bank/transactions"
      );

      setTransactions(response.data.transactions);

    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  };
  
  const transferRes = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        "http://localhost:3001/bank/transfers"
      );

      setTransactions(response.data.transactions);

    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      transactionsRes();
      transferRes();
    };

    fetchData();
  }, []);

  let filteredTransactions =[]

  if(filterInputValue){
    filteredTransactions = transactions.filter((current) =>{
      return(current.description.toLowerCase().includes(filterInputValue.toLowerCase()))
    })
  }
    else{

      filteredTransactions = transactions
    }

    const handleOnCreateTransaction = async () => {
      setIsCreating(true)
      
    }
   
    // const handleOnCreateTransaction = async () => {
    //   console.log("Entered some type of handle")
    //   setIsCreating(true)
    //   axios.post("http://localhost:3001/bank/transactions",
    //   {"transaction": {newTransactionForm}})
    //   .then((response) => {
    //     setTransactions([...transactions, response.data.transaction])
    //     console.log("Succesfully added:", response.data.transaction)
    //   }, reason => {
    //     setError(reason);
    //     console.error("ERROR:", error);
    //   })
    //   setNewTransactionForm ({"category": "", "description": "","amount": 0})
    //   setIsCreating(false)
    //   console.log("LEaving some type of submit function")
    // }
  

  return (
    <div className="home">
      <AddTransaction 
      isCreating={isCreating}
      setIsCreating={setIsCreating}
      newTransactionForm={newTransactionForm}
      setNewTransactionForm={setNewTransactionForm}
      
      />
    
      {isLoading ? <h1>Loading...</h1>:
        <BankActivity 
          transactions={filteredTransactions}
        />
      }
        <h2 className="error">{error}</h2>
    </div>
  )
}
