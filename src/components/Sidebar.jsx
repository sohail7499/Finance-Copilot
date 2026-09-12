import {
  FiHome,
  FiCreditCard,
  FiBarChart2,
  FiTarget,
  FiCpu,
  FiUpload,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const sideBar = [
    { id: 1, name: "Dashboard", icon: <FiHome /> },
    { id: 2, name: "Transactions", icon: <FiCreditCard /> },
    { id: 3, name: "Analytics", icon: <FiBarChart2 /> },
    { id: 4, name: "Budgets", icon: <FiTarget /> },
    { id: 5, name: "AI Copilot", icon: <FiCpu /> },
    { id: 6, name: "Import Statement", icon: <FiUpload /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}
      <div
        className={`
                    fixed left-0 top-0 z-50
                    min-h-screen w-64
                    bg-slate-900 p-5 text-white
                    transition-transform duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:static md:translate-x-0
`}
      >
        <h1 className="flex h-15.25  items-center border-b border-slate-200 text-xl font-bold">
          Finance Copilot
        </h1>

        <div className="mt-8">
          {sideBar.map((sidebar) => (
            <button
              key={sidebar.id}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-3 font-medium hover:bg-slate-800"
              onClick={() => {
                setIsSidebarOpen(false);

                if (sidebar.name === "Dashboard") {
                  navigate("/");
                }
                if (sidebar.name === "Import Statement") {
                  navigate("/import");
                }
                if (sidebar.name === "Transactions") {
                  navigate("/transaction");
                }
              }}
            >
              <span className="text-xl">{sidebar.icon}</span>
              {sidebar.name}
            </button>
          ))}

          <button
            onClick={handleLogout}
            className="mt-4 flex w-full items-center gap-3 rounded-lg px-2 py-3 font-medium hover:bg-slate-800"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
