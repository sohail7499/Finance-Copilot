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

function IncomeExpenseChart() {
  const data = [
    { month: "Jan", income: 55000, expenses: 32000 },
    { month: "Feb", income: 55000, expenses: 35000 },
    { month: "Mar", income: 55000, expenses: 30000 },
    { month: "Apr", income: 55000, expenses: 38000 },
    { month: "May", income: 55000, expenses: 34000 },
    { month: "Jun", income: 55000, expenses: 36000 },
  ];

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm mt-5">
        <h2 className="text-center mb-3 font-bold text-lg">
          Income vs Expenses
        </h2>

        {/* Chart yahan aayega */}
        <ResponsiveContainer className={`mt-10`} width="100%" height={300} >
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="income" fill="#22c55e" />
            <Bar dataKey="expenses" fill="#ef4444" />
            <CartesianGrid />
            <Tooltip />
            <Legend  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default IncomeExpenseChart;
