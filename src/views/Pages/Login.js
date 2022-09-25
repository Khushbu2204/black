import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Input } from "reactstrap";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(4, "Username must be 4 characters at minimum"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      //"Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    )
    .required(),
});

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    alert("submit");
    e.preventDefault();
    const user = { username, password };
    localStorage.setItem("user", user);
    let logedIn = localStorage.getItem("user");
    console.log(logedIn);
    
    console.log(user);
    if(logedIn){
      props.history.push("/admin");
    }
    // const response = await axios.post(
    //   "http://localhost:8080/login",
    //   user
    // );
    // setUser(response.data);
    // // localStorage.setItem("user", response.data);
    // console.log(response.data);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
              alert("Form is validated! Submitting the form...");
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5">Login Form</h1>
                    </div>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <Input
                        tag={Field}
                        name="username"
                        placeholder="Enter username"
                        className={`mt-2 form-control
						${touched.username && errors.username ? "is-invalid" : ""}`}
                        // onChange={({ target }) => setUsername(target.value)}
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                      />

                      <ErrorMessage
                        component="div"
                        name="username"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="mt-3">
                        Password
                      </label>
                      <Input
                        tag={Field}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
						${touched.password && errors.password ? "is-invalid" : ""}`}
                        //onChange={({ target }) => setPassword(target.value)}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Login
                    </button>
                    <div className="row mt-3">
                      <div className="col-6"> <Link to="register">Register</Link>
                      </div>
                      <div className="col-6 mr-0"> <p>Forgot Password</p></div>
                    </div>
                  </Form>
                </div>
              ) : (
                <div>
                  <h1 className="p-3 mt-5">Form Submitted</h1>

                  <div className="alert alert-success mt-3">
                    Thank for your connecting with us. Here's what we got from
                    you !
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">
                      Password: {values.password}
                    </li>
                  </ul>
                </div>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;

