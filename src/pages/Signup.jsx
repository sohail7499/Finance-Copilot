import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  {
    /* Error ke liye state */
  }

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /* e.preventDefault() kyun?
      Normal HTML form submit karega to browser page reload kar sakta hai. */
    }

    let hasError = false;

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!name) {
      setNameError("Name is required");
      hasError = true;
    }
    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      hasError = true;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      hasError = true;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }
    if (hasError) {
      return;
    }

    const user = {
      id: Date.now(),
      name,
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-4 md:h-screen md:overflow-hidden">
      <div className="w-full max-w-md rounded-2xl bg-white px-6 py-5 shadow-lg">
        {/* Heading */}
        <h1 className="text-center text-2xl font-bold text-slate-800">
          Finance Copilot
        </h1>

        <p className="mt-1 text-center text-sm text-slate-500">
          Create your account to start managing your finances.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
            {nameError && (
              <p className="mt-1 text-sm text-red-500">{nameError}</p>
            )}
          </div>

          {/* Email */}
          <div className="mt-3">
            <label className="text-sm font-medium text-slate-700">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="mt-3">
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
              placeholder="Create a password"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
            {passwordError && (
              <p className="mt-1 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mt-3">
            <label className="text-sm font-medium text-slate-700">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError("");
              }}
              placeholder="Confirm your password"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-500"
            />
            {confirmPasswordError && (
              <p className="mt-1 text-sm text-red-500">
                {confirmPasswordError}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-slate-900 py-2.5 font-semibold text-white transition hover:bg-slate-800"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-slate-800 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
