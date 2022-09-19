
import React from "react";
import { Formik, Field, ErrorMessage } from 'formik';
import { register } from "services/use-service";

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
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>First Name</label>
                        <Input

                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input

                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="mike@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input

                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Date Of Birth</label>
                        <Input
                          placeholder="DOB"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Date Of Joining</label>
                        <Input
                          placeholder="DOJ"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Contact No.</label>
                        <Input

                          placeholder="Contact No."
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Password </label>
                        <Input
                          placeholder="password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Confirm Password</label>
                        <Input
                          placeholder="confirm password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
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
