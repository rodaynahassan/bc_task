import { Row, Col, Container } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import HomePagePC from "../../assets/svg/HomePagePC.svg";
import "./secondSection.scss";

export default function SecondSection() {
  return (
    <Container
      fluid
      className="gx-0 px-0"
      style={{
        backgroundColor: "#21436E",
        height: " 400pt",
      }}
    >
      <Row className="gx-0 px-5 py-2">
        <Col
          xs={5}
          style={{
            backgroundImage: `url(${HomePagePC})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            marginLeft: "70pt",
          }}
        ></Col>

        <Col xs={6}>
          <Fade duration={3000} triggerOnce>
            <div className="place">The place</div>
            <div className="home">we call home</div>
            <div className="description">
              Makadi Heights is a town built over 3.4 million square meters
              planned for development, with an elevation reaching 78 meters
              above sea level guaranteeing magnificent panoramic sea views
              residential units. Envisioned as a comprehensive town.
            </div>
          </Fade>

          <Row
            className="gx-0 px-0"
            style={{ marginTop: "32px", marginLeft: "10px" }}
          >
            <Col className="gx-0 px-0">
              {" "}
              <Fade duration={2000} triggerOnce>
                <button className="button-group" variant="light">
                  Download Brochure
                </button>{" "}
              </Fade>
            </Col>
            <Col className="gx-0 px-0">
              {" "}
              <Fade duration={2000} triggerOnce>
                <button className="button-group" variant="light">
                  Show Master plan
                </button>{" "}
              </Fade>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
