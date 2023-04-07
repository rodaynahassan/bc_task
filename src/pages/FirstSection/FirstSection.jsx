import { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import backgroundImage from "../../assets/images/Makadi_Heights_Render.png";
import logo from "../../assets/images/LOGOWhite_EN.png";
import Phone from "../../assets/svg/phone.svg";
import BurgerMenu from "../../assets/svg/burgerIcon.svg";
import "./firstSection.scss";

export default function FirstSection() {
  const [temperature, setTemperature] = useState(0);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
      );
      const data = await response.json();
      setTemperature(Math.round(data.main.temp - 273.15));
      const weatherIcon = data.weather[0].icon;
      const weatherIconRequest = await fetch(
        `http://openweathermap.org/img/w/${weatherIcon}.png`
      );
      const weatherIconData = await weatherIconRequest.blob();
      const weatherIconUrl = URL.createObjectURL(weatherIconData);
      setSrc(weatherIconUrl);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <Container
        className="gx-0 px-0"
        fluid
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Navbar>
          <Container className="gx-0 px-0">
            <Navbar.Brand style={{ paddingLeft: "3rem", marginTop: "3rem" }}>
              <Fade triggerOnce duration={4000}>
                <img src={logo} width="120rem" height="70rem" alt="Logo" />
              </Fade>
            </Navbar.Brand>
            <Navbar.Collapse
              className="justify-content-end align-items-center align-content-center"
              style={{ marginTop: "1rem" }}
            >
              <Fade triggerOnce duration={4000}>
                <img
                  src={src}
                  alt="Weather"
                  className="mx-2"
                  width="70pt"
                  height="70pt"
                />
                <div className="temperature mx-2"> {temperature} ° </div>
                <img src={Phone} alt="Phone" className="mx-2" />
                <button className="book-now mx-2" variant="light">
                  Book now
                </button>{" "}
                <div className="menu mx-2 "> Menu</div>
                <img src={BurgerMenu} alt="Menu" className="mx-2" />
              </Fade>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
