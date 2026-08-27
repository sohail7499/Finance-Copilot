import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SpendingCharts() {
  const spendingData = [
    { month: "Jan", spending: 24000 },
    { month: "Feb", spending: 28000 },
    { month: "Mar", spending: 22000 },
    { month: "Apr", spending: 32000 },
    { month: "May", spending: 30000 },
    { month: "Jun", spending: 36000 },
    { month: "july", spending: 40000 },
    { month: "Aug", spending: 10000 },
  ];
  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm mt-5">
        <h2 className="text-lg font-semibold text-slate-800">
          Spending Overview
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Track your spending over time.
        </p>

        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="spending" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default SpendingCharts;
