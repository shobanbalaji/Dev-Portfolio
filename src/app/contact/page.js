"use client";

import React, { useState } from "react";
import Header from "../header/page";
import { Row, Col, Form, Button } from "react-bootstrap";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      const ref = collection(db, "messages");
      await addDoc(ref, message);
      toast.success("message Sent");
      setMessage({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      toast.error("message Failed");
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <Header isBackground={false} menuColor={"#aaa"} />

      <Row className="dev-contact">
        <h1 className="text-center"> Ask me Anything!</h1>

        <Form className="px-5 contact-form" onSubmit={handleSubmit}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="sung"
            value={message.name}
            onChange={handleChange}
            required
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="sung@email.com"
            value={message.email}
            onChange={handleChange}
            required
          />

          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            placeholder="Hello, type your message here"
            value={message.message}
            onChange={handleChange}
            required  
          />

          <Button className="mt-5 py-2 px-5" type="submit">
            Shoot Me
          </Button>
        </Form>
      </Row>
    </div>
  );
};

export default Contact;
