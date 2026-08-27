import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "recharts";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {
    /* error state */
  }
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
    if (!email || !password) {
      return;
    }

    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-slate-800">
          Finance Copilot
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Welcome back. Login to manage your finances.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          <div className="mt-5">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Enter your password"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
            />
            {passwordError && (
              <p className="mt-1 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?
          <Link
            to="/signup"
            className="cursor-pointer font-semibold text-slate-800 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
