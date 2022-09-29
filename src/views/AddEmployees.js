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
  FormGroup,
  Form,
  Row,
  Col,
} from "reactstrap";

const LoginSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(4, "First name must be 4 characters at minimum"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    ),
  last_name: Yup.string()
    .required("Last name is required")
    .min(4, "Last name must be 4 characters at minimum"),
  email: Yup.string()
    .required("Email is required")
    .email(4, "Enter valid email address"),
  dob: Yup.string()
    // .required("Date of birth is required")
    .min(4, "Date of birth must be 4 characters at minimum"),
  doj: Yup.string()
    // .required("Date of joining is required")
    .min(4, "Date of joining must be 4 characters at minimum"),
  address: Yup.string()
    .required("Address is required")
    .min(4, "Address must be 4 characters at minimum"),

  confirm_password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
      "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 1 number, Min 8 characters, Max 20 characters."
    )
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  contact_no: Yup.string().matches(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    "Min 10 digits."
  ),
  Emp_code: Yup.string()
    .required("Employee Code is required")
    .min(4, "Employee Code must be 4 characters at minimum"),
});


function AddEmployee() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [emp_code, setEmpcode] = useState("");
  const [address, setAddress] = useState("");
  const [date_of_Birth, setDob] = useState("");
  const [date_of_Joining, setDoj] = useState("");
  const [contact_no, setContactno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] =useState("");
  const [user,setUser] = useState();


  const handleReg = async (e) => {
     e.preventDefault();
     alert("submit");
     const user = { first_name, last_name,emp_code,address,date_of_Birth,date_of_Joining,contact_no,email,gender,password,role};
    console.log(user);
     const response = await axios.post(
      "http://localhost:8080/employee/register",
      user
     );
     setUser(response.data);
     console.log(response.data);
  };


  return (
    <>
      <div className="content">
        <Row className="justify-content-center">
          <Col md="8">
            <Card>
              <CardHeader>
                <h3 className="title">Add Employee</h3>
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
                   // gender: "",
                    contact_no: "",
                    Emp_code: "",
                    role:"",
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
                        
                        <Col className="pr-md-1" md="6">
                            <FormGroup>
                            <label>Emp code</label>
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
                          <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>First Name</label>
                              <Field
                                className={`mt-2 form-control
                        ${touched.First_name && errors.First_name
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
                          <Col className="px-md-1" md="6">
                            <FormGroup>
                              <label>Last Name</label>
                              <Field
                                placeholder="Last Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Last_name && errors.Last_name
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
                        {/* <Row>
                          <col md="6">
                            <FormGroup>
                              <label>Emp_code</label>
                              <Field
                                placeholder="Employee Code"
                                type="text"

                                name="" />
                            </FormGroup>
                          </col>
                        </Row> */}

                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Address</label>
                              <Field
                                placeholder="Home Address"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.address && errors.address ? "is-invalid" : ""
                                  }`}
                                name="address"
                                onChange={e => setAddress(e.target.value)}
                                value={address}
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
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Gender</label>
                              <Field
                                placeholder="Gender"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Date_of_Birth && errors.Date_of_Birth ? "is-invalid" : ""}`}
                                name="gender"
                                onChange={e => setGender(e.target.value)}
                                value={gender}
                              />
                              <ErrorMessage
                                component="div"
                                name="gender"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                                </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Role</label>
                              <Field
                                placeholder="Role"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Date_of_Joining && errors.Date_of_Joining ? "is-invalid" : ""}`}
                                name="role"
                                onChange={e => setRole(e.target.value)}
                                value={role}
                              />
                              <ErrorMessage
                                component="div"
                                name="role"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Date Of Birth</label>
                              <Field
                                placeholder="DOB"
                                type="date"
                                className={`mt-2 form-control
                        ${touched.Date_of_Birth && errors.Date_of_Birth ? "is-invalid" : ""}`}
                                name="date_of_Birth"
                                onChange={e => setDob(e.target.value)}
                                value={date_of_Birth}
                              />
                              <ErrorMessage
                                component="div"
                                name="date_of_Birth"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Date Of Joining</label>
                              <Field
                                placeholder="DOJ"
                                type="date"
                                className={`mt-2 form-control
                        ${touched.Date_of_Joining && errors.Date_of_Joining ? "is-invalid" : ""}`}
                                name="date_of_Joining"
                                onChange={e => setDoj(e.target.value)}
                                value={date_of_Joining}
                              />
                              <ErrorMessage
                                component="div"
                                name="date_of_Joining"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Contact No.</label>
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
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <Field
                                placeholder="mike@email.com"
                                type="email"
                                className={`mt-2 form-control
                        ${touched.E_mail && errors.E_mail ? "is-invalid" : ""}`}
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
                              <label>Password </label>
                              <Field
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                className={`mt-2 form-control
						${touched.password && errors.password ? "is-invalid" : ""}`}
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                              />
                              <ErrorMessage
                                component="div"
                                name="password"
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
                <Button className="btn-fill" color="primary" onClick={handleReg}>
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

export default AddEmployee;
