import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const LoginSchema = Yup.object().shape({
username: Yup.string()
	.required("Username is required")
  .min(4, "Username must be 4 characters at minimum"),
password: Yup.string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
          "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
        )
	.required("Password is required"),
});

function login() {

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
					<Form>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<Field
						type="text"
						name="username"
						placeholder="Enter username"
						autocomplete="off"
						className={`mt-2 form-control
						${touched.username && errors.username ? "is-invalid" : ""}`}
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
						<Field
						type="password"
						name="password"
						placeholder="Enter password"
						className={`mt-2 form-control
						${
							touched.password && errors.password
							? "is-invalid"
							: ""
						}`}
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

export default login;
