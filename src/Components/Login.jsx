import React from "react";

const Login = () => {
  
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">This is Login Page</h1>
      <div className="">
        <div className="hero-content flex-col ">
          <h1 className="font-bold">Login now!</h1>
          <div className="text-center lg:text-left"></div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form action="">
           
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
