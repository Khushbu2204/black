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
  club_id: Yup.string()
    .required("Club Id is required")
    .min(1, "First name must be 1 characters at minimum"),
  
  category: Yup.string()
    .required("Category is required")
    .min(4, "Last name must be 4 characters at minimum"),
  club_name: Yup.string()
    .required("Club Name is required")
    .email(4, "Enter valid Club Name"),

  date: Yup.string().min(4, "Date of joining must be 4 characters at minimum"),

  admin: Yup.string()
    .required("Admin is required")
    .min(4, "Admin Name must be 4 characters at minimum"),
});


function AddClub() {
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
                        
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Club ID</label>
                              <Field
                                className={`mt-2 form-control
                        ${touched.club_id && errors.club_id
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
                                name="club_id"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Club Name</label>
                              <Field
                                placeholder="Club Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.club_name && errors.club_name
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="club_name"
                                onChange={e => setClubname(e.target.value)}
                                value={club_name}
                              />
                              <ErrorMessage
                                component="div"
                                name="club_name"
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
                        ${touched.date && errors.date
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="date"
                                onChange={e => setDate(e.target.value)}
                                value={date}
                              />
                              <ErrorMessage
                                component="div"
                                name="date"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>

                        
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

                        
                      
                        
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Category</label>
                              <Field
                                placeholder="Category."
                                type="text"
                                className={`mt-2 form-control
                        ${touched.category && errors.category
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="category"
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                              />
                              <ErrorMessage
                                component="div"
                                name="category"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Admin
                              </label>
                              <Field
                                placeholder="Admin Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.admin && errors.admin ? "is-invalid" : ""}`}
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

export default AddClub;
