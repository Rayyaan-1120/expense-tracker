import React, { useRef, useState } from "react";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid"
import { useDispatch, useSelector } from "react-redux";
import {
  typecheck,
  eventcheck,
  datecheck,
  profitcheck,
  expensecheck,
  emptyvalue,
  idcheck
} from "../features.js/datareducer";
import {
  formsubmit,
  totalexpense,
  totalprofit,
} from "../features.js/dataarray";
import {
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  CssBaseline,
} from "@material-ui/core";
import { Button } from "react-bootstrap";

function Sidebar() {
  const data = useSelector((state) => state.data.value);

  const dispatch = useDispatch();
  const submitform = (e) => {
    e.preventDefault();
    dispatch(formsubmit(data));
    dispatch(totalprofit());
    dispatch(totalexpense());
    dispatch(idcheck(uuidv4()))

    dispatch(emptyvalue());
    profitref.current.value = "";
    expanseref.current.value = "";
    textref.current.value = "";
  };

  const profitref = useRef();
  const expanseref = useRef();
  const textref = useRef();

  const valuechange = (e) => {
    dispatch(typecheck(e.target.value));
    if (e.target.value === "profit") {
      profitref.current.style.display = "block";
      expanseref.current.style.display = "none";
    } else {
      profitref.current.style.display = "none";
      expanseref.current.style.display = "block";
    }
  };

  return (
    <Sidebardiv>
      <Container>
        <Typography
          variant="h5"
          gutterBottom={true}
          style={{ marginTop: "1rem", color: "#fff" }}
        >
          Expense Tracker
        </Typography>
      </Container>
      <Container>
        <FormControl
          style={{ width: "90%", margin: "1rem auto" }}
          color="secondary"
        >
          <form onSubmit={submitform}>
            <InputLabel style={{ color: "#fff", fontSize: ".8rem" }}>
              Type
            </InputLabel>
            <Select
              label="Type"
              onChange={valuechange}
              style={{ fontSize: "1rem", marginTop: "1rem 0", width: "100%" }}
            >
              <MenuItem value="expanse">
                <Typography
                  align="left"
                  variant="h6"
                  gutterBottom={true}
                  style={{ marginTop: "1rem", color: "#fff" }}
                >
                  Expense
                </Typography>
              </MenuItem>
              <MenuItem value="profit">
                <Typography
                  align="left"
                  variant="h6"
                  gutterBottom={true}
                  style={{ marginTop: "1rem", color: "#fff" }}
                >
                  Profit
                </Typography>
              </MenuItem>
            </Select>
            <input
              type="text"
              ref={textref}
              placeholder="event"
              onChange={(e) => {
                dispatch(eventcheck(e.target.value));
              }}
            />
            <input
              type="date"
              onChange={(e) => {
                dispatch(datecheck(e.target.value));
              }}
            />
            <input
              type="number"
              ref={profitref}
              placeholder="event"
              onChange={(e) => {
                dispatch(profitcheck(e.target.value));
              }}
            />

            <input
              type="number"
              ref={expanseref}
              placeholder="event"
              onChange={(e) => {
                dispatch(expensecheck(e.target.value));
              }}
              style={{ display: "none" }}
            />

            <Button
              variant="dark"
              size="lg"
              className="p-2 mt-2 w-100"
              type="submit"
            >
              submit
            </Button>
          </form>
        </FormControl>
      </Container>
    </Sidebardiv>
  );
}

const Sidebardiv = styled.div`
  font-family: Roboto, "sans";
  min-height: 100vh;
  width: 20%;
  background-color: #161616;
  transition: all 0.5s ease;

  @media (max-width:768px){
    width:100%;
  }
`;

export default Sidebar;
