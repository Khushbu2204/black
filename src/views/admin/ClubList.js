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

function ClubList() {
  const [clubs, setClubData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:8080/club/list")
      .then((response) =>setClubData(response.data));
  }, []);

  console.log(clubs);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h1" className="justify-content-center mt-3">
                  Club List
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Club Id</th>
                      <th>Club Name</th>
                      <th>category</th>
                      
                      <th>created date</th>
                      <th className="text-center">Register</th>
                    </tr>
                  </thead>
                  {clubs.map((club) => (
                    <tbody>
                      <tr>
                        <td>{club.club_id}</td>
                        <td>{club.club_name}</td>
                        <td>{club.category}</td>
                        <td>{club.date_of_creation}</td>
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

export default ClubList;
