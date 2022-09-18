
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

function UserLogin() {
  return (
    <>
      <div className="content">
        <Row className="justify-content-md-center">
          <Col md="4">
            <Card>
              <CardHeader>
                <h5 className="title">Login page</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="12">
                      <FormGroup>
                        <label>User name</label>
                        <Input placeholder="User@1" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="12">
                      <FormGroup>
                        <label>Password</label>
                        <Input placeholder="**********" type="password" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill btn-block" color="primary" type="submit">
                  Login
                </Button><br/>

                <NavLink to="login" className="ml-5" >
                       <span className="">
                          Forget password
                        </span> 
                    </NavLink>
                    <NavLink to="register" className="ml-5" >
                       <span className="">
                          Register
                        </span> 
                    </NavLink>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserLogin;
