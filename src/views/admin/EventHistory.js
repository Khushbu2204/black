import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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

function Eventhistory() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>setEvents(response.data));
  }, []);

  console.log(events);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1" className="justify-content-center mt-3">
                  Event History
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Event Id</th>
                      <th>Event Name</th>
                      <th>Description</th>
                      <th className="text-center">Date</th>
                      <th>Starting Time</th>
                      <th>End Time</th>
                      <th>Club Id</th>
                    </tr>
                  </thead>
                  {events.map((event) => (
                    <tbody>
                      <tr>
                        <td>{event.title}</td>
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

export default Eventhistory;