import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

function IncomeExpenseChart() {
  const transactions = useSelector((state) => state.transaction.transactions);

  const trnasactionData = transactions.reduce((acc, transaction) => {
    const month = transaction.date.split(" ")[0].split("-")[1];
    // transaction.date = "08-06-2026 18:23:54"
    // split(" ") → ["08-06-2026", "18:23:54"]
    // split("-") → ["08", "06", "2026"]
    // [1] → "06" (month)

    // ADVANCED CONCEPT:
    // acc ek object hai jisme hum har month ka alag data store kar rahe hain.
    // Agar current month pehle se acc ke andar nahi hai,
    // to us month ke liye income aur expenses ka object create karo.
    //
    // Example:
    // acc = {
    //   "06": {
    //     income: 0,
    //     expenses: 0
    //   }
    // }
    if (!acc[month]) {
      acc[month] = {
        income: 0,
        expenses: 0,
      };
    }

    // CR = Credit = Income
    // Agar transaction income hai,
    // to current month ke income mein us transaction ka amount add karo.
    //
    // acc[month]        → current month
    // .income           → us month ka income
    // transaction.amount → current transaction ka amount
    //
    // Example:
    // June income = 5000
    // New CR = 3000
    // 5000 + 3000 = 8000
    if (transaction.type === "CR") {
      acc[month].income = acc[month].income + transaction.amount;
    }

    if (transaction.type === "DR") {
      acc[month].expenses = acc[month].expenses + transaction.amount;
    }

    // IMPORTANT:
    // reduce() mein accumulator ko next iteration ke liye return karna zaroori hai.
    return acc;
  }, {});
  console.log(trnasactionData);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = Object.entries(trnasactionData).map(([month, value]) => {
    const monthName = months[Number(month) - 1];
    return {
      month: monthName,
      income: value.income,
      expenses: value.expenses,
    };
  });

  // console.log(data);

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm mt-5">
        <h2 className="text-center mb-3 font-bold text-lg">
          Income vs Expenses
        </h2>

        {/* Chart yahan aayega */}
        <ResponsiveContainer className={`mt-10`} width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="income" fill="#22c55e" />
            <Bar dataKey="expenses" fill="#ef4444" />
            <CartesianGrid />
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default IncomeExpenseChart;
