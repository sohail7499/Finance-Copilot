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

  return (
    <>
      <div className="">
        <table className="w-full text-sm text-left">
          <thead className=" w-full bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
              <th className="px-4 py-3 font-semibold">Balance</th>
            </tr>
          </thead>

          <tbody>
            {usedTransaction.map((transaction) => (
              <tr
                className="border-b border-slate-200 hover:*:bg-slate-50"
                key={transaction.id}
              >
                <td className="px-4 py-3">
                  {transaction.date}
                </td>
                <td className="px-4 py-3">{transaction.description}</td>
                <td className="px-4 py-3">{transaction.type}</td>
                <td className="px-4 py-3">{transaction.amount}</td>
                <td className="px-4 py-3">{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
