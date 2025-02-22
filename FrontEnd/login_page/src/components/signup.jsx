import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";

function Signup({ x }) {
  const [hide, setHide] = useState(true);
  const [hided, setHided] = useState(true);
  const [err, setErr] = useState("");
  const [data, setData] = useState({ name: "", email: "", password: "", confirmpass: "" });

  const handleHide = () => setHide(!hide);
  const handleHided = () => setHided(!hided);
  const handleForm = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const { name, email, password, confirmpass } = data;
    if (password !== confirmpass) {
      setErr("Passwords do not match");
      return;
    }
    if (!name || !email || !password || !confirmpass) {
      setErr("Please fill all fields");
      return;
    }
    try {
      await axios.post("http://localhost:8592/user/signup", { name, email, password });
      console.log("Registered successfully");
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800">Create an Account</h1>
      {err && <p className="text-red-500 text-center mt-2">{err}</p>}

      <div className="mt-6">
        <label className="block text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleForm}
          className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
        />
      </div>

      <div className="mt-4">
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

      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Confirm Password</label>
        <div className="relative">
          <input
            type={hided ? "password" : "text"}
            name="confirmpass"
            onChange={handleForm}
            className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 pr-10"
            placeholder="Confirm your password"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={handleHided}
          >
            {hided ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
      >
        Signup
      </button>

      <div className="mt-4 text-center text-gray-700">
        <p>
          Already have an account? 
          <span onClick={x} className="text-red-600 cursor-pointer font-medium hover:underline"> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;