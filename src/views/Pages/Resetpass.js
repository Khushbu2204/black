import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Input } from "reactstrap";

const LoginSchema = Yup.object().shape({
  oldpassword: Yup.string()
    .required()
    .min(4, "oldpassword must be 4 characters at minimum"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      //"Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    )
    .required(),
    confirm_password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    )
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Login() {
  const [oldpassword, setOldpassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    alert("submit");
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/login",
      user
    );
    setUser(response.data);
    console.log(response.data);
  };
  
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <Formik
            initialValues={{ oldpassword: "", password: "",confirm_password:"" }}
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
                      <h1 className="mt-5">Reset Password</h1>
                    </div>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="oldpassword">Old password</label>
                      <Input
                        tag={Field}
                        name="oldpassword"
                        placeholder="Enter Old Password"
                        className={`mt-2 form-control
						${touched.oldpassword && errors.oldpassword ? "is-invalid" : ""}`}
                        // onChange={({ target }) => setoldpassword(target.value)}
                        onChange={e => setOldpassword(e.target.value)}
                        value={oldpassword}
                      />

                      <ErrorMessage
                        component="div"
                        name="oldpassword"
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

                    <div className="form-group">
                      <label htmlFor="confirm_password" className="mt-3">
                        confirm Password
                      </label>
                      <Input
                        tag={Field}
                        type="confirm_password"
                        name="confirm_password"
                        placeholder="Enter confirm Password"
                        className={`mt-2 form-control
						${touched.confirm_password && errors.confirm_password ? "is-invalid" : ""}`}
                        //onChange={({ target }) => setconfirm_Password(target.value)}
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirm_password}
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
                      Reset
                    </button>
                    
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

