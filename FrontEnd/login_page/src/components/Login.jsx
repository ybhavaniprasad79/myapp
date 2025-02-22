import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";

function Login({ x }) {
  const [hide, setHide] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({ email: "", password: "" });

  const handleHide = () => setHide(!hide);

  const handleForm = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, password } = data;
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:8592/user/login", { email, password });
      console.log("Logged in successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <div className="mt-6">
        <label className="block text-gray-700 font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleForm}
          className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Password</label>
        <div className="relative">
          <input
            type={hide ? "password" : "text"}
            name="password"
            onChange={handleForm}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 pr-10"
            placeholder="Enter your password"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={handleHide}
          >
            {hide ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-700">Remember me</label>
        </div>
        <p className="text-blue-600 font-medium cursor-pointer hover:underline">
          Forgot password?
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
      >
        Login
      </button>

      <div className="mt-4 text-center text-gray-700">
        <p>
          Don't have an account? 
          <span onClick={x} className="text-red-600 cursor-pointer font-medium hover:underline"> Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
