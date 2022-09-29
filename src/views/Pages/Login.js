import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {
  Input,
  Form,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const [role, setrole] = useState("");
  const [user, setUser] = useState();
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
    } 
    // else if (
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/i.test(
    //     values.password
    //   )
    // ) {
    //   errors.password = "Invalid password";
    // }

    return errors;
  };

  //  const handleSubmit = async (e) => {
  //    e.preventDefault();
  //    const user = { username, password };
    
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      
      let emp_code = values.username;
      let password = values.password;
      let user = {emp_code,password}

      const res = axios.post('http://localhost:8080/employee/login',
      {
       emp_code: emp_code,
       password: password 
      }
    )
    .then(response => {
      localStorage.setItem("user", user);
      localStorage.setItem("role", response.data.role);
        let logedIn = localStorage.getItem("user");
            if (logedIn) {
              props.history.push("/admin");
            }
    });
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
                <Label for="userName">Emp_code</Label>
                <Input
                  invalid={formik.errors.username}
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                <FormFeedback>Employee code is required</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
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

              <div className="row mt-3">
                <div className="col-6">
                  {" "}
                  </div>
                <div className="col-6 mr-0">
                  {" "}
                  <p>Forgot Password</p>
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
