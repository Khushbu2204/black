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
  
  description: Yup.string()
    .required("Description  is required")
    .min(4, "Description must be 4 characters at minimum"),
  event_name: Yup.string()
    .required("Event Name is required")
    ,

  start_date: Yup.string().min(4, "Date of joining must be 4 characters at minimum"),
  end_date: Yup.string().min(4, "Date of joining must be 4 characters at minimum"),

  event_id: Yup.string()
    .required("Event id is required")
    .min(1, "Event must be 1 characters at minimum"),
});


function AddEvent() {
  const [club_id, setClubid] = useState("");
  const [event_name, setEventname] = useState("");
  const [start_date, setStartdate] = useState("");
  const [description, setDescription] = useState("");
  const [end_date, setEnddate] = useState("");
  const [event_id, setEventid] = useState("");
 
const [user,setUser] = useState();


  const handleReg = async (e) => {
     e.preventDefault();
     alert("submit");
     const user = { club_id, event_name,start_date,description,end_date,event_id };
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
                <h3 className="title">Add Event </h3>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{
                    club_id: "",
                    event_name: "",
                   start_date: "",
                    description: "",
                    end_date: "",
                    event_id:"",
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
                              <label>Event Name</label>
                              <Field
                                placeholder="Event Name"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.event_name && errors.event_name
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="event_name"
                                onChange={e => setEventname(e.target.value)}
                                value={event_name}
                              />
                              <ErrorMessage
                                component="div"
                                name="event_name"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>

                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label>Start Date</label>
                              <Field
                                placeholder="date"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.start_date && errors.start_date
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="date"
                                onChange={e => setStartdate(e.target.value)}
                                value={start_date}
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
                              <label>Description</label>
                              <Field
                                placeholder="Description"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.description && errors.description
                                    ? "is-invalid"
                                    : ""
                                  }`}
                                name="Description"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                              />
                              <ErrorMessage
                                component="div"
                                name="description"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                End Date
                              </label>
                              <Field
                                placeholder="End Date"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.end_date&& errors.end_date? "is-invalid" : ""}`}
                                name="Admin"
                                onChange={e => setEnddate(e.target.value)}
                                value={end_date}
                              />
                              <ErrorMessage
                                component="div"
                                name="End date"
                                className="invalid-feedback"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="6">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Event Id
                              </label>
                              <Field
                                placeholder="Event Id"
                                type="text"
                                className={`mt-2 form-control
                        ${touched.event_id&& errors.event_id? "is-invalid" : ""}`}
                                name="Event"
                                onChange={e => setEventid(e.target.value)}
                                value={event_id}
                              />
                              <ErrorMessage
                                component="div"
                                name="Event Id"
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

export default AddEvent;
