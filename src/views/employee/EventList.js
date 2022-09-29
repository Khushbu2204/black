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

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:8080/event/list")
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
                  Event List
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
                      <th>Register</th>
                    </tr>
                  </thead>
                  {events.map((event) => (
                    <tbody>
                      <tr>
                        <td>{event.userId}</td>
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

export default EventList;
