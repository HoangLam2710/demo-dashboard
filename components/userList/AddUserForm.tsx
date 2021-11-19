import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import { UserFullType } from "../../lib/types/userType";
import axios from "axios";
import { SERVER_BASE_URL } from "../../lib/utils/constant";

const validationSchema = yup.object().shape({
  title: yup.string(),
  firstName: yup.string().required("Required!!!"),
  lastName: yup.string().required("Required!!!"),
  email: yup.string().email("Invalid email format!!!").required("Required!!!"),
});

const AddUserForm = (props: any) => {
  const [isLoading, setLoading] = useState(false);

  const handleClosePopup = () => {
    props.closePopup();
  };

  const initialValues: UserFullType = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/79.jpg",
    // gender: "",
    // dateOfBirth: "",
    // registerDate: "",
    // phone: "",
    // location: {},
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setAllTouched();
    if (!formik.isValid) return;
    setLoading(true);

    try {
      await axios({
        url: `${SERVER_BASE_URL}/create`,
        method: "POST",
        headers: { "app-id": "61948d0ce6d8b3a3164452e0" },
        data: formik.values,
      }).then((res) => handleClosePopup());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const setAllTouched = () => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            as="select"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value=""></option>
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
            <option value="mrs">Mrs</option>
            <option value="miss">Miss</option>
            <option value="dr">Dr</option>
          </Form.Control>
          {formik.touched.title && (
            <Form.Text className="text-danger">{formik.errors.title}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && (
            <Form.Text className="text-danger">
              {formik.errors.firstName}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && (
            <Form.Text className="text-danger">
              {formik.errors.lastName}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddUserForm;
