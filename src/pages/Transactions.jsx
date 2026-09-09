import React from "react";

function Transactions() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //   console.log(currentUser);
  const savedTransactions = JSON.parse(
    localStorage.getItem("transactions") || "{}",
  );
  //   console.log(savedTransactions);

  const usedTransaction = savedTransactions[currentUser.id];
  //Current logged-in user ki transactions nikaal kar usedTransaction mein store karo.
  //Aur [] yahan array banane ke liye nahi, balki object ki dynamic key access karne ke liye hai.
  console.log(usedTransaction);

  const firstTransaction = usedTransaction[0];
  console.log(firstTransaction);

  return (
    <>
      <div>
        <h1>Transaction</h1>

        <p>Date: {firstTransaction.date}</p>
        <p>Description: {firstTransaction.description}</p>
        <p>Amount: {firstTransaction.amount}</p>
        <p>Type: {firstTransaction.type}</p>
        <p>Balance: {firstTransaction.balance}</p>
      </div>
    </>
  );
}

export default Transactions;
