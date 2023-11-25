import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ListGroup from "./components/ListGroup";

const App = () => {

  const [edit , setEdit] = useState({
    transaction: {},
    isEdit: false , 
  });


  
//  Date Format
  const  updatedTime  = Intl.DateTimeFormat("en-us",{dateStyle : "medium", timeStyle : "short"
})
// console.log(updatedTime.format());


//  edit transaction


const editTransaction = (transaction) =>{
  setEdit({transaction : transaction , isEdit :true})
}

// updateTransaction
 const updateTransaction = (id, amount , text ) => {
  setTransaction(
    transactions.map((item) =>
    item.id === id ? {
      ...item, text:text , amount :parseInt(amount )}:item 
    )
  );
  setEdit({transaction:{}, isEdit:false});
 };





// save transaction 
const saveTransaction = (amount, text)=> {
  const newTransaction = {
    id: crypto.randomUUID(),
    amount : parseInt(amount),
    text, 

 


  };
setTransaction([newTransaction,...transactions])
};





// delete transaction


  const deleteitem = (id) => {
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  }

  const [transactions, setTransaction] = useState([
 
  ]);


  // Clear List data

  const clearAll = ()=> {
    setTransaction([]);
  };


  return (
    <>
      <Navbar clearAll={clearAll}  />

        <MainSection transactions={transactions} saveTransaction={saveTransaction} edit= {edit} updateTransaction= {updateTransaction}  />

      <ListGroup transactions={transactions} deleteitem={deleteitem} editTransaction={editTransaction} updatedTime={updatedTime}  />
    </>
  );
};

export default App;
