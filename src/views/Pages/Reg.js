import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const LoginSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(4, "First name must be 4 characters at minimum"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    )
    .required("Password is required"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(4, "Last name must be 4 characters at minimum"),
  email: Yup.string()
    .required("Email is required")
    .email( "Enter valid email address"),
  dob: Yup.string()
    .required("Date of birth is required")
    .min(4, "Date of birth must be 4 characters at minimum"),
  doj: Yup.string()
    .required("Date of joining is required")
    .min(4, "Date of joining must be 4 characters at minimum"),
  address: Yup.string()
    .required("Address is required")
    .min(4, "Address must be 4 characters at minimum"),
  confirm_password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    )
    .min(4, "confirm_password must be 4 characters at minimum"),
});

function Registration() {
  return (
    <>
      <div className="content">
        <Row className="justify-content-center">
          <Col md="8">
            <Card>
              <CardHeader>
                <h3 className="title">Registration</h3>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    dob: "",
                    doj: "",
                    address: "",
                    password: "",
                    confirm_password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    alert("Form is validated! Submitting the form...");
                  }}
                >
                  {({ touched, errors, isSubmitting, values }) =>
                    !isSubmitting ? (
                      <Form>
                        <Row>
                          <Col className="pr-md-1" md="5">
                            <FormGroup>
                              <label>First Name</label>
                              <Field
                                
                                className={`mt-2 form-control
                        ${
                          touched.first_name && errors.first_name
                            ? "is-invalid"
                            : ""
                        }`}
                                name="first_name"
                                placeholder="First Name"
                                type="text"
                              />
                              <ErrorMessage
						component="div"
						name="first_name"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="3">
                            <FormGroup>
                              <label>Last Name</label>
                              <Field
                                placeholder="Last Name"
                                type="text"
                                
                                className={`mt-2 form-control
                        ${
                          touched.last_name && errors.last_name
                            ? "is-invalid"
                            : ""
                        }`}
                                name="last_name"
                              />
                              <ErrorMessage
						component="div"
						name="last_name"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                          <Col className="pl-md-1" md="4">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <Field
                                placeholder="mike@email.com"
                                type="email"
                                
                                className={`mt-2 form-control
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                                name="email"
                              />
                              <ErrorMessage
						component="div"
						name="email"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Address</label>
                              <Field
                                placeholder="Home Address"
                                type="text"
                                
                                className={`mt-2 form-control
                        ${
                          touched.address && errors.address ? "is-invalid" : ""
                        }`}
                                name="address"
                              />
                              <ErrorMessage
						component="div"
						name="address"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="4">
                            <FormGroup>
                              <label>Date Of Birth</label>
                              <Field
                                placeholder="DOB"
                                type="date"
                                
                                className={`mt-2 form-control
                        ${touched.dob && errors.dob ? "is-invalid" : ""}`}
                                name="dob"
                              />
                              <ErrorMessage
						component="div"
						name="dob"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="4">
                            <FormGroup>
                              <label>Date Of Joining</label>
                              <Field
                                placeholder="DOJ"
                                type="date"
                                
                                className={`mt-2 form-control
                        ${touched.doj && errors.doj ? "is-invalid" : ""}`}
                                name="doj"
                              />
                              <ErrorMessage
						component="div"
						name="doj"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="4">
                            <FormGroup>
                              <label>Contact No.</label>
                              <Field
                                placeholder="Contact No."
                                type="text"
                                
                                className={`mt-2 form-control
                        ${
                          touched.contact_no && errors.contact_no
                            ? "is-invalid"
                            : ""
                        }`}
                                name="contact_no"
                              />
                              <ErrorMessage
						component="div"
						name="contact_no"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Password </label>
                              <Field
                                placeholder="password"
                                type="password"
                                
                                className={`mt-2 form-control
                        ${
                          touched.passsword && errors.passsword
                            ? "is-invalid"
                            : ""
                        }`}
                                name="passsword"
                              />
                              <ErrorMessage
						component="div"
						name="password"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Confirm Password</label>
                              <Field
                                placeholder="confirm password"
                                type="password"
                                
                                className={`mt-2 form-control
                        ${
                          touched.confirm_password && errors.confirm_password
                            ? "is-invalid"
                            : ""
                        }`}
                                name="confirm_password"
                              />
                              <ErrorMessage
						component="div"
						name="confirm_password"
						className="invalid-feedback"
						/>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    ) : (
                      <div>
                        <h1 className="p-3 mt-5">Form Submitted</h1>

                        <div className="alert alert-success mt-3">
                          Thank for your connecting with us. Here's what we got
                          from you !
                        </div>
                        <ul className="list-group">
                          <li className="list-group-item">
                            Email: {values.email}
                          </li>
                          <li className="list-group-item">
                            Password: {values.password}
                          </li>
                        </ul>
                      </div>
                    )
                  }
                </Formik>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Registration;
