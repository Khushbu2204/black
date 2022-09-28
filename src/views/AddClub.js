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
});


function ClubRegistration() {
  const [club_id, setClubid] = useState("");
  const [club_name, setClubname] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [admin, setAdmin] = useState("");
 
const [user,setUser] = useState();


  const handleReg = async (e) => {
     e.preventDefault();
     alert("submit");
     const user = { club_id, club_name,date,category,admin };
    console.log(user);
     const response = await axios.post(
      "http://localhost:8080/register",
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
                <h3 className="title">Add Club </h3>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{
                    club_id: "",
                    club_name: "",
                    date: "",
                    category: "",
                    admin: "",
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
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Club ID</label>
                              <Field
                                className={`mt-2 form-control
                        ${touched.First_name && errors.First_name
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="club_id"
                                placeholder="Club Id"
                                type="text"
                                onChange={e => setClubid(e.target.value)}
                                value={club_id}
                              />
                              <ErrorMessage
                                component="div"
                                name="club_name"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="px-md-1" md="6">
                            <FormGroup>
                              <label>Club Name</label>
                              <Field
                                placeholder="Club Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Last_name && errors.Last_name
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="club_name"
                                onChange={e => setClubname(e.target.value)}
                                value={club_name}
                              />
                              <ErrorMessage
                                component="div"
                                name="last_name"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>

                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Date</label>
                              <Field
                                placeholder="date"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Emp_code && errors.Emp_code
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="date"
                                onChange={e => setDate(e.target.value)}
                                value={date}
                              />
                              <ErrorMessage
                                component="div"
                                name="emp_code"
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
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Category</label>
                              <Field
                                placeholder="Category."
                                type="text"
                                className={`mt-2 form-control
                        ${touched.Contact_no && errors.Contact_no
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="category"
                                onChange={e => setCategory(e.target.value)}
                                value={category}
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
                                placeholder="Admin Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.E_mail && errors.E_mail ? "is-invalid" : ""}`}
                                name="Admin"
                                onChange={e => setAdmin(e.target.value)}
                                value={admin}
                              />
                              <ErrorMessage
                                component="div"
                                name="Admin"
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

export default ClubRegistration;
