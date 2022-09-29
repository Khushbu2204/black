import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Registration from "./Reg";
import { NavLink } from "react-router-dom";
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
  //  const [role, setrole] = useState("");
  // const [user, setUser] = useState();
  // formik validations
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Please choose a unique and valid username.";
    } else if (values.username.length > 50) {
      errors.username = "Must be 10 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/i.test(
        values.password
      )
    ) {
      errors.password = "Invalid password";
    }

    return errors;
  };

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
  //role (response)

  //   // const response = await axios.post(
  //   //   "http://localhost:8080/login",
  //   //   user
  //   // );
  //   // setUser(response.data);
  //   // // localStorage.setItem("user", response.data);
  //   // console.log(response.data);
  // };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("user", values);
      props.history.push("/admin");
      // alert(JSON.stringify(values, null, 2));
      // if (formik.u && password) {
      //       localStorage.setItem("user", user);
      //       let logedIn = localStorage.getItem("user");
      //       console.log(logedIn);
      //       console.log(user);
      //       if (logedIn) {
      //         props.history.push("/admin");
      //       }
      //     }
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <div>
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5">Login Form</h1>
              </div>
            </div>
            <Form noValidate onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="userName">User Name</Label>
                <Input
                  invalid={formik.errors.username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                <FormFeedback>Username is required</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Passwords</Label>
                <Input
                  id="password"
                  name="password"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  invalid={formik.errors.password}
                />
                <FormFeedback>Password is required</FormFeedback>
              </FormGroup>
              
              <button type="submit" className="btn btn-primary btn-block mt-4">
                Login
              </button>

              <div className="row mr-3">
                <div className="col-6">
                  {" "}
                  <NavLink
                        to={'/register'}
                        className="btn btn-secondary"
                      >
                        Forgot Password
                      </NavLink>
                </div>
                
              </div>
            </Form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
