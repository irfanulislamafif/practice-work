import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log("register clicked", email, password, terms);
    const strongPasswordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!strongPasswordPattern.test(password)) {
      console.log("password didn't match");
      setError(
        "Password must be at least 6 characters, include uppercase, lowercase, number, and special character!"
      );
      return;
    }
    setError("");
    setSuccess(false);
    if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();
        sendEmailVerification(auth, email, password)
          .then(() => {
            alert("Email verification sent successfully");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-xl ">This is register page</h1>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegisterForm}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className="relative ">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleTogglePasswordShow}
                      className="absolute top-2 right-3 btn btn-xs">
                      {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                    </button>
                  </div>
                  <div>
                    <label class="label">
                      <input type="checkbox" name="terms" class="checkbox" />
                      Accept Our Term & Conditions
                    </label>
                  </div>
                  <div>
                    <a className="link link-hover hover:text-blue-400">
                      Forgot password?
                    </a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                {
                  success && (
                    <p className="text-green-500">
                      Account Created successfully
                    </p>
                  )
                  // can be shown here toast
                }
                {error && <p className="text-red-500 font-semibold">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
