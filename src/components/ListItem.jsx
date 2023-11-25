import React from "react";

import { FaTrash } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";



const ListItem = ({ transaction , deleteitem , editTransaction, updatedTime  }) => {
  return (
    <li className="list-item">

        <h3
          className={
            transaction.amount > 0
              ? "income-transaction"
              : "expense-transaction"
          }
        >
          ₹{transaction.amount}
        </h3>
         <span className="line-break"><h4>{transaction.text}</h4>
         <h6>{(updatedTime.format())}</h6>
         </span>

<span className="btn-span">
      <button className="delbtn" >
    <FaTrash  onClick={()=> deleteitem(transaction.id)} />
  </button>
  <button className="editbtn"  >
    <FaPenFancy onClick={()=> editTransaction(transaction)} />
  </button>

  </span>

    </li>
  );
};

export default ListItem;
