import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import ImportStatement from "./pages/ImportStatement";
import Transactions from "./pages/Transactions";
import { setTransactions } from "./features/transactionSlice";
import { useDispatch } from "react-redux";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  const savedTransactions = JSON.parse(
    localStorage.getItem("transactions") || "{}",
  );

  const usedTransaction = currentUser
    ? savedTransactions[currentUser.id] || []
    : [];
  useEffect(() => {
    dispatch(setTransactions(usedTransaction));
     //usedTransaction mein jo transactions ka data hai, usko setTransaction action ke through Redux Store mein bhejo.
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/import" element={<ImportStatement />} />
            <Route path="/transaction" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
