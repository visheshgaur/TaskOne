import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("email is",email)
    // console.log("password is",password)
  };
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center ">
        <div className="border-2 border-emerald-600 p-20 rounded-3xl p-10">
         
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center "
          >
            <input
              required
              className=" border-2 border-emerald-600 rounded-full py-4 px-5  bg-transparent  text-lg text-white placeholder:text-white-500"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              required
              className="mt-5 border-2 border-emerald-600 rounded-full py-4 px-5  bg-transparent  text-lg text-white placeholder:text-white-500"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button className="mt-10 border-2 bg-emerald-600 rounded-full py-4 px-5  font-bold text-lg text-white w-full">
              Log in
            </button>
          </form>
          
        </div>
        
      </div>
       <div className="flex justify-center items-center -mt-1.5">
            <p className="text-center">
              admin credentials <br />
              email: admin@gmail.com <br />
              password: 123
            </p>
          </div>
           <div className="flex justify-center items-center ">
            <p className="text-center">
              can check by assigning task to : <br />
              email: abc@gmail.com <br />
              password: 123
              name:Aarav
            </p>
          </div>

    </>
  );
};

export default Login;
