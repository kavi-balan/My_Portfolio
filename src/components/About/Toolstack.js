import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{fontSize: "3em", color: "#6f42c1", display: "flex", alignItems: "center", justifyContent: "center"}}>
        Blackbox
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{fontSize: "3em", color: "#00aaff", display: "flex", alignItems: "center", justifyContent: "center"}}>
        ChatGPT
      </Col>
    </Row>
  );
}

export default Toolstack;
