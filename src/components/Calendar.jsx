import React from "react";
import "./Calendar.css";
import { Container, Row, Col, Card } from "react-bootstrap";
const Calendar = () => {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.toLocaleString("default", { weekday: "long" });
  const year = currentDate.getFullYear();
  return (
    <>
      <Container className="calendar-container">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="clendar-card">
              <div className="calendar-header">
                <span className="calendar-month">{month}</span>
              </div>
              <Card.Body className="text-center card-body">
                <Card.Text className="calendar-day">{day}</Card.Text>
                <Card.Text className="calendar-date">{date}</Card.Text>
                <Card.Text className="calendar-year">{year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Calendar;
