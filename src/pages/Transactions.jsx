import { useSelector } from "react-redux";

function Transactions() {
  const transactions = useSelector((state) => state.transaction.transactions);
  //Redux ke transaction state ke andar jo transactions array hai, usko transactions variable mein le aao.

  if (transactions.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500 text-sm">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile view: cards */}
      <div className="sm:hidden divide-y divide-slate-200">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="px-4 py-3 bg-white">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{transaction.date}</span>
              <span
                className={
                  transaction.type === "CR"
                    ? "text-green-600 font-medium"
                    : "text-red-600 font-medium"
                }
              >
                {transaction.type}
              </span>
            </div>
            <p className="text-sm text-slate-800 wrap-break-word">
              {transaction.description}
            </p>
            <div className="flex justify-between text-sm mt-1">
              <span className="font-semibold">{transaction.amount}</span>
              <span className="text-slate-500">Bal: {transaction.balance}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view: table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Date
              </th>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Type
              </th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Amount
              </th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                className="border-b border-slate-200 hover:bg-slate-50"
                key={transaction.id}
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  {transaction.date}
                </td>
                <td className="px-4 py-3">{transaction.description}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {transaction.type}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {transaction.amount}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {transaction.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
