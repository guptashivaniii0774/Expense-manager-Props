import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ transactions, deleteitem, editTransaction , updatedTime }) => {
  return (
    <ul className="list-group">
      {transactions.map((transaction) => (
        <ListItem key={transaction.id} transaction={transaction} deleteitem={deleteitem} editTransaction={editTransaction} updatedTime={updatedTime} />
      ))}
    </ul>
  );
};

export default ListGroup;
