import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import { FormPopUp } from "./FormPopUp";
import FormPic from "../../assets/svg/FormPic.svg";
import "./fourthSection.scss";

export default function FourthSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const onSubmit = (data) => {
    setShow(true);
    setData(data);
  };

  useEffect(() => {
    reset({
      name: "",
      email: "",
      budget: "",
      phone: "",
      message: "",
      agreement: false,
    });
  }, [submittedSuccess]);
  return (
    <Container fluid className="gx-0 px-0">
      <FormPopUp
        show={show}
        setShow={setShow}
        data={data}
        setSubmittedSuccess={setSubmittedSuccess}
      />
      <Row className="gx-0 px-0">
        <Col
          // xs={5}
          className="g-0 p-0"
          style={{
            backgroundImage: `url(${FormPic})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Col>
        <Col className="py-4 gx-0 px-0">
          <Fade duration={3000} triggerOnce>
            <p className="form-title">
              {" "}
              Enter your details and our representative will get back to you
              shortly
            </p>
          </Fade>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Fade duration={3000} triggerOnce>
              <Form.Floating className={`mb-4 `} style={{ width: "660px" }}>
                <Form.Control
                  defaultValue=""
                  id="floatingInputCustom"
                  type="text"
                  placeholder="name@example.com"
                  {...register("name", {
                    required: "Name is required",
                    validate: (value) =>
                      value.length >= 3 ||
                      "Name should be more than 3 characters",
                  })}
                  name="name"
                />
                <label
                  htmlFor="floatingInputCustom"
                  className={` ${
                    errors?.name ? "missing-field" : "floating-label-style"
                  }`}
                >
                  Your name
                </label>
                {errors?.name && (
                  <Fade triggerOnce>
                    <p className="alert-message">{errors?.name?.message}</p>
                  </Fade>
                )}
              </Form.Floating>
            </Fade>
            <Fade duration={3000} triggerOnce>
              <Form.Floating className="mb-4" style={{ width: "660px" }}>
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                />
                <label
                  htmlFor="floatingInputCustom"
                  className={` ${
                    errors?.email ? "missing-field" : "floating-label-style"
                  }`}
                >
                  Email ID
                </label>
                {errors?.email && (
                  <Fade triggerOnce>
                    <p className="alert-message">{errors?.email?.message}</p>
                  </Fade>
                )}
              </Form.Floating>
            </Fade>
            <Fade duration={3000} triggerOnce>
              <Form.Floating className="mb-4" style={{ width: "660px" }}>
                <Form.Control
                  id="floatingInputCustom"
                  type="number"
                  placeholder="name@example.com"
                  name="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    validate: (value) =>
                      value.length === 11 || "Phone number should be 11 digits",
                  })}
                />
                <label
                  htmlFor="floatingInputCustom"
                  className={` ${
                    errors?.phone ? "missing-field" : "floating-label-style"
                  }`}
                >
                  Phone Number
                </label>
                {errors?.phone && (
                  <Fade triggerOnce>
                    <p className="alert-message">{errors?.phone?.message}</p>
                  </Fade>
                )}
              </Form.Floating>
            </Fade>
            <Fade duration={3000} triggerOnce>
              <Form.Floating className="mb-4" style={{ width: "660px" }}>
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="name@example.com"
                  name="budget"
                  {...register("budget", { required: "Budget is required" })}
                />
                <label
                  htmlFor="floatingInputCustom"
                  className={` ${
                    errors?.budget ? "missing-field" : "floating-label-style"
                  }`}
                >
                  Choose your budget
                </label>
                {errors?.budget && (
                  <Fade triggerOnce>
                    <p className="alert-message">{errors?.budget?.message}</p>
                  </Fade>
                )}
              </Form.Floating>
            </Fade>
            <Fade duration={3000} triggerOnce>
              <Form.Floating className="mb-4" style={{ width: "660px" }}>
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="name@example.com"
                  name="message"
                  {...register("message")}
                />
                <label
                  htmlFor="floatingInputCustom"
                  className="floating-label-style"
                >
                  Enter your message
                </label>
                {errors?.message && (
                  <Fade triggerOnce>
                    <p className="alert-message">{errors?.message?.message}</p>
                  </Fade>
                )}
              </Form.Floating>
            </Fade>
            <Fade duration={3000} triggerOnce>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to the processing of personal data"
                  className="agreement"
                  name="agreement"
                  {...register("agreement", {
                    required: "You have to agree to process your data!",
                  })}
                />
                {errors?.agreement && (
                  <Fade triggerOnce>
                    <p className="alert-message">
                      {errors?.agreement?.message}
                    </p>
                  </Fade>
                )}
              </Form.Group>
            </Fade>
            <Fade duration={3000} triggerOnce>
              <button className="submit-form px-4 py-2" type="submit">
                leave a Call request
              </button>{" "}
            </Fade>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
