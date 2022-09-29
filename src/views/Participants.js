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

function Participants() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>setParticipants(response.data));
  }, []);

  console.log(participants);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1" className="justify-content-center mt-3">
                  Participants List
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Emp Id</th>
                      <th>Employee Name</th>
                      <th>Email</th>
                      <th className="text-center">Contact No.</th>
                    </tr>
                  </thead>
                  {participants.map((participants) => (
                    <tbody>
                      <tr>
                        <td>{participants.title}</td>
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

export default Participants;