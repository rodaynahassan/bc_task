import { useState } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import commercial from "../../assets/svg/Carousel1.svg";
import kidsArea from "../../assets/images/kidsArea.jpeg";
import hotels from "../../assets/images/hotels.jpeg";
import sports from "../../assets/images/sports.jpeg";
import park from "../../assets/images/park.jpeg";
import medical from "../../assets/images/medical.jpg";
import CA from "../../assets/svg/CA.svg";
import CP from "../../assets/svg/CP.svg";
import HO from "../../assets/svg/HO.svg";
import KA from "../../assets/svg/KA.svg";
import MF from "../../assets/svg/MF.svg";
import SF from "../../assets/svg/SF.svg";
import Line from "../../assets/svg/Line.svg";
import "./thirdSection.scss";

export default function ThirdSection() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container
      fluid
      className="gx-0 px-0 py-5"
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Row className="d-flex align-content-center gx-0 px-0">
        <Col className="py-0">
          <Fade duration={3000} triggerOnce>
            <p className="discover align-items-center justify-content-center align-content-center align-self-center">
              Discover Lifestyle
            </p>
            <p className="amentities">Amentities</p>
            <p className="subtitle mb-0">
              Occupying a land area of 33,000 square meters,
            </p>
            <p className="subtitle2 mb-0">Makadi Heights’ stunning clubhouse</p>
          </Fade>
          <Row className="justify-content-md-center">
            <Col className="pe-0 text-center" xs={4}>
              <Fade duration={3000} triggerOnce>
                <button
                  style={{
                    backgroundColor: "transparent",
                    borderBottom: "1px dashed #C4C4C4",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  className="mt-3"
                  onClick={() => setIndex(0)}
                >
                  <img
                    style={{ marginBottom: "16px" }}
                    src={CA}
                    alt="React Logo"
                    class={`${index === 0 ? "filter-green" : ""}`}
                  />
                  <p
                    style={{ color: index === 0 ? "#21436E" : "#268FB4" }}
                    className="my-0 title"
                  >
                    Commercial Areas
                  </p>
                  <p className="my-0 lines">Downtown</p>

                  <p className="mb-2 lines">Makadi Heights Mall</p>
                </button>{" "}
                <button
                  style={{
                    backgroundColor: "transparent",
                    borderBottom: "1px dashed #C4C4C4",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  className="mt-3"
                  onClick={() => setIndex(1)}
                >
                  <img
                    style={{ marginBottom: "16px" }}
                    src={KA}
                    alt="React Logo"
                    class={`${index === 1 ? "filter-green" : ""}`}
                  />
                  <p
                    style={{ color: index === 1 ? "#21436E" : "#268FB4" }}
                    className="my-0 title"
                  >
                    Kids Friendly Areas
                  </p>
                  <p className="my-0 lines">Kids Aqua Park</p>

                  <p className="mb-2 lines">Kids Area</p>
                </button>{" "}
                <button
                  style={{
                    backgroundColor: "transparent",

                    border: "none",
                  }}
                  className="mt-3"
                  onClick={() => setIndex(2)}
                >
                  <img
                    style={{ marginBottom: "16px" }}
                    src={HO}
                    alt="React Logo"
                    class={`${index === 2 ? "filter-green" : ""}`}
                  />
                  <p
                    style={{ color: index === 2 ? "#21436E" : "#268FB4" }}
                    className="my-0 title"
                  >
                    Hotels
                  </p>
                  <p className="my-0 lines">Far far behind, </p>

                  <p className="mb-2 lines">the word mountains</p>
                </button>{" "}
              </Fade>
            </Col>

            <Col xs={1} style={{ marginLeft: "2rem" }}>
              <img src={Line} alt="line" />
            </Col>
            <Col className="text-center" xs={4}>
              <Fade duration={3000} triggerOnce>
                <div>
                  {" "}
                  <button
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px dashed #C4C4C4",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                    className="mt-3"
                    onClick={() => setIndex(3)}
                  >
                    <img
                      style={{ marginBottom: "16px" }}
                      src={SF}
                      alt="React Logo"
                      class={`${
                        index === 3 ? "filter-green" : "filter-navyBlue"
                      }`}
                    />
                    <p
                      style={{ color: index === 3 ? "#21436E" : "#268FB4" }}
                      className=" my-0 title"
                    >
                      Sports Facilities
                    </p>
                    <p className="my-0 lines">Sports Courts, Fitness Center</p>

                    <p className="mb-2 lines">Water Sports Activities</p>
                  </button>{" "}
                </div>
                <div className="">
                  {" "}
                  <button
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px dashed #C4C4C4",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
                    className="mt-3"
                    onClick={() => setIndex(4)}
                  >
                    <img
                      style={{ marginBottom: "16px" }}
                      src={CP}
                      alt="React Logo"
                      class={`${index === 4 ? "filter-green" : ""}`}
                    />
                    <p
                      style={{ color: index === 4 ? "#21436E" : "#268FB4" }}
                      className="my-0 title"
                    >
                      Central Park
                    </p>
                    <p className="my-0 lines">Far far behind, </p>

                    <p className="mb-2 lines">the word mountains</p>
                  </button>{" "}
                </div>{" "}
                <div className="">
                  {" "}
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    className="mt-3"
                    onClick={() => setIndex(5)}
                  >
                    <img
                      style={{ marginBottom: "16px" }}
                      src={MF}
                      alt="React Logo"
                      class={`${index === 5 ? "filter-green" : ""}`}
                    />
                    <p
                      style={{ color: index === 5 ? "#21436E" : "#268FB4" }}
                      className="my-0 title"
                    >
                      Medical Facilities
                    </p>
                    <p className="my-0 lines">Far far behind, </p>

                    <p className="mb-2 lines">the word mountains</p>
                  </button>{" "}
                </div>
              </Fade>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <div>
            <Fade duration={3000}>
              <Carousel
                controls={false}
                activeIndex={index}
                onSelect={handleSelect}
              >
                <Carousel.Item>
                  <img
                    src={commercial}
                    alt="First slide"
                    style={{ width: "400pt", height: "550pt" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={kidsArea}
                    alt="Second slide"
                    style={{ width: "400pt", height: "550pt" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={hotels}
                    alt="Third slide"
                    style={{ width: "400pt", height: "550pt" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={sports}
                    alt="Third slide"
                    style={{ width: "400pt", height: "550pt" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={park}
                    alt="Third slide"
                    style={{ width: "400pt", height: "550pt" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={medical}
                    alt="Third slide"
                    style={{ width: "400pt", height: "550pt" }}
                  />
                </Carousel.Item>
              </Carousel>
            </Fade>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
