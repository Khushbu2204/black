
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

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
  Col
} from "reactstrap";
const LoginSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(4, "First name must be 4 characters at minimum"),
  
  last_name: Yup.string()
    .required("Last name is required")
    .min(4, "Last name must be 4 characters at minimum"),
  email: Yup.string()
    .required("Email is required")
    .email(4, "Enter valid email address"),

  contact_no: Yup.string().matches(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    "Min 10 digits."
  ),
  Emp_code: Yup.string()
    .required("Employee Code is required")
    .min(4, "Employee Code must be 4 characters at minimum"),
  address: Yup.string()
    .required("Employee Code is required")
    .min(4, "Employee Code must be 4 characters at minimum"),
});

function UserProfile() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [emp_code, setEmpcode] = useState("");
  const [contact_no, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <div className="row">
                  <div className="col-md-6"><h5 className="title">Edit Profile</h5></div>
                  
                </div>
              </CardHeader>
              <CardBody>
              <Formik 
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  contact_no: "",
                  Emp_code: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  console.log(values);
                  alert("Form is validated! Submitting the form...");
                }}
              >
                {({touched, errors, isSubmitting, values})=>
                    !isSubmitting ? (
                      <Form>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Employee Code</label>
                            <Field
                                placeholder="Emp code"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Emp_code && errors.Emp_code
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="emp_code"
                                onChange={e => setEmpcode(e.target.value)}
                                value={emp_code}
                              />
                              <ErrorMessage
                                component="div"
                                name="emp_code"
                                className="invalid-feedback"
                              />
                            
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>EMail</label>
                            <Field
                                placeholder="mike@email.com"
                                type="email"
                                className={`mt-2 form-control
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
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
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>First Name</label>
                            <Field
                                className={`mt-2 form-control
                        ${touched.first_name && errors.first_name
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="first_name"
                                placeholder="First Name"
                                type="text"
                                onChange={e => setFirstname(e.target.value)}
                                value={first_name}
                              />
                              <ErrorMessage
                                component="div"
                                name="first_name"
                                className="invalid-feedback"
                              />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Last Name</label>
                            <Field
                                placeholder="Last Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.last_name && errors.last_name
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="last_name"
                                onChange={e => setLastname(e.target.value)}
                                value={last_name}
                              />
                              <ErrorMessage
                                component="div"
                                name="last_name"
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
                                placeholder="Contact No."
                                type="text"
                                className={`mt-2 form-control
                        ${touched.address && errors.address
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="address"
                                onChange={e => setaddress(e.target.value)}
                                value={address}
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
                            <label>Mobile No</label>
                            <Field
                                placeholder="Contact No."
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Contact_no && errors.Contact_no
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="contact_no"
                                onChange={e => setContactno(e.target.value)}
                                value={contact_no}
                              />
                              <ErrorMessage
                                component="div"
                                name="contact_no"
                                className="invalid-feedback"
                              />
                          </FormGroup>
                        </Col>

                      </Row>

                    </Form>
                    ):(
                      <div>
                        <h1 className="p-3 mt-5">Form Submitted</h1>

                        <div className="alert alert-success mt-3">
                          Successfully Registred!
                        </div>
                        {/* <ul className="list-group">
                          <li className="list-group-item">
                            Email: {values.email}
                          </li>
                          <li className="list-group-item">
                            Password: {values.password}
                          </li>
                        </ul> */}
                      </div>
                    )
                  }
                
              </Formik>
                  

              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>


          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg")}
                    />
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              {/* <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
