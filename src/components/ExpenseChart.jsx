import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ExpenseChart() {
  const expenseData = [
    { name: "Food", value: 9000 },
    { name: "Bills", value: 8000 },
    { name: "Shopping", value: 6000 },
    { name: "Transport", value: 5000 },
  
    { name: "Others", value: 4400 },
  ];
  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];
  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm mt-5">
        <h2 className="text-lg font-semibold text-slate-800">
          Expense Categories
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          See where your money is going.
        </p>
        <div className="mt-6 h-80">
          {/* Donut Chart */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              {/* Pie yahan */}
              <Pie
                data={expenseData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default ExpenseChart;
