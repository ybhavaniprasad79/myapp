import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";


function Signup(props) {
  let [hide, sethide] = useState(true);
  let [hided, sethided] = useState(true);
  let [err, seterr] = useState("");

  const handlehide = () => {
    sethide(!hide);
  };
  const handlehided = () => {
    sethided(!hided);
  };

  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmpass:""
  })
   
  

  const handleform = (e) => {
    setData({...data,[e.target.name]:e.target.value})
    console.log(data);
  }


   const handlesubmit = async()=>{
    
    const {name,email,password,confirmpass} =data
    if(password!==confirmpass){
      seterr("Passwords do not match")
      return
    }
    if(!name || !email || !password || !confirmpass){ 
      seterr("Please fill all fields")
      return
    }


    try {
      console.log("hhhh")
      await axios.post("http://localhost:8592/user/signup",{
        name,email,password
      })
      console.log("regiterdd")
    } catch (error) {
      console.log(error)
      seterr(error.message)
    }

   }
  return (
    <>
      <div className="border-2 w-[500px] mt-10 ml-15">
        <h1 className="text-3xl font-bold text-center">Create an Account</h1>

        <div className="w-7/10 h-120 m-auto mt-10 mb-10 shadow-lg">
          <label htmlFor="" className="block ml-10 mt-10">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
            onChange={handleform}
          />
          <label htmlFor="" className="block ml-10 mt-10">
            Email address
          </label>
          <input
          name="email"
            type="text"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
            onChange={handleform}
          />
          <label htmlFor="" className="block ml-10 mt-5 ">
            Password
          </label>
          <div className="flex  w-8/10 m-auto">
            <input
            name="password"
              type={hide ? "password" : "text"}
              className="border-1 w-[140%] block m-auto h-8 rounded-md rounded-bl-md"
              onChange={handleform}
            />

            {hide ? (
              <FaRegEye
                className=" w-[12%] h-5 mt-1 ml-1"
                onClick={handlehide}
              />
            ) : (
              <FaRegEyeSlash
                className="w-[12%] h-5 mt-1 ml-1"
                onClick={handlehide}
              />
            )}
          </div>

          <label htmlFor="" className="block ml-10 mt-5 ">
            Confirm Password
          </label>
          <div className="flex  w-8/10 m-auto">
            <input
            name="confirmpass"
              type={hided ? "password" : "text"}
              className="border-1 w-[140%] block m-auto h-8 rounded-md rounded-bl-md"
              onChange={handleform}
            />

            {hided ? (
              <FaRegEye
                className="w-[12%] h-5 mt-1 ml-1"
                onClick={handlehided}
              />
            ) : (
              <FaRegEyeSlash
                className="w-[12%] h-5 mt-1 ml-1"
                onClick={handlehided}
              />
            )}
          </div>

          <div className="flex m-auto mt-5  w-[80%]  justify-between ">
            <div className="flex  w-[48%]">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
              <p className="text-red-400 ">{err}</p>
            </div>

            {/* <h6 className="font-semibold text-blue-700">Forgot password</h6> */}
          </div>

          <button
            onClick={handlesubmit}
            type="submit"
            className=" w-8/10 block m-auto bg-blue-500 rounded-m mt-5 h-8 rounded-md"
          >
            Signup
          </button>

          <h6 onClick={props.x} className="ml-9">
            Already have an account
          </h6>
        </div>
      </div>
    </>
  );
}
export default Signup;