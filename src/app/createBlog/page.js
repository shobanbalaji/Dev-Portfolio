"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Form, Col, Row, Button } from "react-bootstrap";
import Header from "../header/page";
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

// ✅ Dynamically import TinyMCE editor (SSR disabled)
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

const Page = () => {
  const [blogContent, setBlogContent] = useState({
    heading: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const collectionRef = collection(db, "blogs");
    const createBlog = await addDoc(collectionRef, blogContent);
  };

  return (
    <div>
      {/* <Header isBackground={false} menuColor={"#aaa"} /> */}

      <Row className="d-flex justify-content-center py-2">
        <Col md={7}>
          <h1 className="mb-4" style={{ fontSize: "25px", fontWeight: "500", color: "blue" }}>
            Create Blog
          </h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                name="heading"
                value={blogContent.heading}
                onChange={handleChange}
                maxLength={50}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={blogContent.description}
                onChange={handleChange}
                maxLength={150}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Editor
                apiKey="bbmnfcslxliybb18gxyaeaiv2ws7h87ngt1lyi0kpqpkl17i" // ✅ no API key needed for dev
                init={{
                //   height: 300,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic underline | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | removeformat | help",
                }}
                value={blogContent.content}
                onEditorChange={(content) =>
                  setBlogContent((prev) => ({ ...prev, content }))
                }
              />
            </Form.Group>

            <Button type="submit" className="px-4">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
