import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function EmployeeList() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:8080/employee/list")
      .then((response) =>setEmployee(response.data));
  }, []);

  console.log(employee);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1" className="justify-content-center mt-3">
                  Employees List
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Emp Id</th>
                      <th>Employee Name</th>
                      <th>Contact No</th>
                      <th className="text-center">Address</th>
                      <th>dob</th>
                      <th>Email</th>
                      <th>Gender</th>
                      
                    </tr>
                  </thead>
                  {employee.map((employee) => (
                    <tbody>
                      <tr>
                        <td>{employee.title}</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EmployeeList;
