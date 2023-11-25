import React, { useEffect, useState } from "react";


const MainSection = ({ transactions, saveTransaction, edit, updateTransaction }) => {
  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);
  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);


  const [amount, setAmount] = useState("")
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTransaction(edit.transaction.id, amount, text)
    } else {
      saveTransaction(amount, text);
    }
    setText("");
    setAmount("");

  };

  useEffect(() => {
    setAmount(edit.transaction.amount)
    setText(edit.transaction.text)

  }, [edit])

  return (
    <div className="main-section">
    <div className="division">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{balance}</h1>
        </span>

      </div>
      <span className="money-divider">  
      
    

        <div id="income" className="balance-01">
          <span>
            <p>Current Income</p>
            <h1>₹{income}</h1>
          </span>
        </div>

        <div id="expense" className="balance-01">
          <span>
            <p>Current Expense</p>
            <h1>₹{expense}</h1>
          </span>
        </div>

   </span>
      </div>


      <form className="transaction-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Transaction" onChange={(e) => setText(e.target.value)} value={text} required />
        <input type="number" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} value={amount} required />
        <button>
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default MainSection;
