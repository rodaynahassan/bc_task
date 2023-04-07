import React, { useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import Lottie from "lottie-react";
import sendingSent from "../../assets/animations/sending-confirmation.json";

export function FormPopUp({ show, setShow, data, setSubmittedSuccess }) {
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
  };
  const handleConfirm = () => {
    setSubmitted(true);
    setSubmittedSuccess(true);
  };

  const modalBody = () => {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Confirm your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="g-0 p-0">
            <Col className="g-0 p-0">
              <p className="field-title">Name</p>{" "}
              <p className="field-title">Email</p>{" "}
              <p className="field-title">Phone</p>{" "}
              <p className="field-title">Budget</p>{" "}
              {data?.message !== "" && <p className="field-title">Message</p>}
            </Col>
            <Col className="g-0 p-0">
              <p className="field-value">{data?.name}</p>{" "}
              <p className="field-value">{data?.email}</p>{" "}
              <p className="field-value">{data?.phone}</p>{" "}
              <p className="field-value">{data?.budget}</p>{" "}
              {data?.message !== "" && (
                <p className="field-value">{data?.message}</p>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <button className="cancel-form px-4 py-2" onClick={handleClose}>
            Close
          </button>{" "}
          <button className="submit-form px-4 py-2" onClick={handleConfirm}>
            Confirm
          </button>{" "}
        </Modal.Footer>
      </div>
    );
  };

  const lottieBody = () => {
    return (
      <div>
        <Modal.Header closeButton />
        <Modal.Body>
          <Lottie animationData={sendingSent} loop={false} />
          <div className="feedback">
            Your request has been submitted successfully!
          </div>
          <div className="feedback">Check you email for the updates.</div>{" "}
          <Modal.Footer>
            <button className="cancel-form px-4 py-2" onClick={handleClose}>
              Close
            </button>{" "}
          </Modal.Footer>
        </Modal.Body>
      </div>
    );
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      {submitted ? lottieBody() : modalBody()}
    </Modal>
  );
}
