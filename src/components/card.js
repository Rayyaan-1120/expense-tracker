import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Countup from "react-countup";

function Carddiv() {
  const profit = useSelector((state) => state.maindata.profitcount);
  const expense = useSelector((state) => state.maindata.expensecount);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "40rem",
        padding: "1rem",
      }}
    >
      <Card
        style={{ width: "15rem", minHeight: "10rem" }}
        className="mb-2"
        bg="dark"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Total Expenses </Card.Title>
          <Card.Title>
            {" "}
            <Countup end={expense} duration={3} />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "15rem", minHeight: "10rem" }}
        className="mb-2"
        bg="dark"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Total Profit </Card.Title>
          <Card.Title>
            {" "}
            <Countup end={profit} duration={3} />
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carddiv;
