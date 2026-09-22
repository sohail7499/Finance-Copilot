import {
  FiDollarSign,
  FiTrendingUp,
  FiCreditCard,
  FiPieChart,
} from "react-icons/fi";
import SpendingCharts from "./SpendingCharts";
import ExpenseChart from "./ExpenseChart";
import IncomeExpenseChart from "./IncomeExpenseChart";
import { useSelector } from "react-redux";

function Dashboard() {
  const transactions = useSelector((state) => state.transaction.transactions);

  const totalIncome = transactions.reduce((acc, transaction) => {
    if (transaction.type === "CR") {
      return acc + transaction.amount;
    }

    return acc;
  }, 0);

  const totalExpanse = transactions.reduce((acc, transaction) => {
    if (transaction.type === "DR") {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const summaryCards = [
    {
      id: 1,
      title: "Total Balance",
      amount: `0,0000`,
      // change: "+12.4%",
      icon: FiDollarSign,
    },
    {
      id: 2,
      title: "Monthly Income",
      amount: `₹${totalIncome.toLocaleString("en-IN")}`,
      change: "+8.2%",
      icon: FiTrendingUp,
    },
    {
      id: 3,
      title: "Total Expenses",
      amount: `₹${totalExpanse.toLocaleString("en-IN")}`,
      // change: "-4.1%",
      icon: FiCreditCard,
    },
    {
      id: 4,
      title: "Savings",
      amount: "₹17,600",
      change: "+15.3%",
      icon: FiPieChart,
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-slate-800">Financial Overview</h1>

      <p className="mt-1 text-slate-500">
        Here's what's happening with your money.
      </p>

      {/* Dashboard sections will come here */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="flex items-center gap-1 text-sm font-medium text-slate-500">
                <span>
                  <Icon />
                </span>
                {card.title}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">
                {card.amount}
              </h2>
              <p className="mt-2 text-sm font-medium text-green-600">
                {card.change}
              </p>
            </div>
          );
        })}
      </div>
      <SpendingCharts />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ExpenseChart />
        <IncomeExpenseChart />
      </div>
    </main>
  );
}

export default Dashboard;
