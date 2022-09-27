import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../../assets/css/login.css";
import {
  Input,
  Form,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";

function Login(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState();
  // formik validations

//   const validate = (values) => {
//     const errors = {};

//     if (!values.username) {
//       errors.username = "Please choose a unique and valid username.";
//     } else if (values.username.length > 50) {
//       errors.username = "Must be 10 characters or less";
//     }

//     if (!values.password) {
//       errors.password = "Required";
//     } else if (
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/i.test(
//         values.password
//       )
//     ) {
//       errors.password = "Invalid password";
//     }

//     return errors;
//   };

  // const handleSubmit = async (e) => {
  //   alert("submit");
  //   e.preventDefault();
  //   const user = { username, password };
  //   if (username && password) {
  //     localStorage.setItem("user", user);
  //     let logedIn = localStorage.getItem("user");
  //     console.log(logedIn);
  //     console.log(user);
  //     if (logedIn) {
  //       props.history.push("/admin");
  //     }
  //   }

  //   // const response = await axios.post(
  //   //   "http://localhost:8080/login",
  //   //   user
  //   // );
  //   // setUser(response.data);
  //   // // localStorage.setItem("user", response.data);
  //   // console.log(response.data);
  // };

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       localStorage.setItem("user", values);
//       props.history.push("/admin");
//       // alert(JSON.stringify(values, null, 2));
//       // if (formik.u && password) {
//       //       localStorage.setItem("user", user);
//       //       let logedIn = localStorage.getItem("user");
//       //       console.log(logedIn);
//       //       console.log(user);
//       //       if (logedIn) {
//       //         props.history.push("/admin");
//       //       }
//       //     }
//     },
//   });

  return (
    <div className="row justify-content-md-center">
        <div className="col-md-4">
          <div>
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5"></h1>
              </div>
              <div class="login-box">
              <h2>Login</h2>
              <form action="">
            <div class="user-box">
                <Input type="text" name="" required=""/>
                <label>Username</label>
            </div>
            <div class="user-box">
                <Input type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <a href="index.html">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </a>
            <div className="row mt-3">
                <div className="col-6">
                  {" "}
                  <p to="register" className="text-success">Register</p>
                </div>
                <div className="col-6 mr-0">
                  {" "}
                  <p>Forgot Password</p>
                </div>
              </div>
        </form>
            </div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default Login;