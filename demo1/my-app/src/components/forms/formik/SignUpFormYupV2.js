import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormYupV2 = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          job: "",
          term: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(5, "5 ký tự thôi").required("required"),
          lastName: Yup.string().max(10, "10 ký tự thôi").required(),
          job: Yup.string().required(),
          term: Yup.boolean(true),
        })}
        onSubmit={(values, action) => {
          console.log(values);
          console.log(action);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="" id="">
            <div>
              <label htmlFor="firstName">first name: </label>
              <Field name="firstName" id="firstName" type="text"></Field>
              <div>
                <ErrorMessage name="firstName"></ErrorMessage>
              </div>
            </div>

            <div>
              <label htmlFor="lastName">last name: </label>
              <Field name="lastName" id="lastName" type="text"></Field>
              <div>
                <ErrorMessage name="lastName"></ErrorMessage>
              </div>
            </div>

            <div>
              <label htmlFor="introduction">introduction: </label>
              <Field
                name="introduction"
                id="introduction"
                type="text"
                as="textarea"
              ></Field>
              <div>
                <ErrorMessage name="introduction"></ErrorMessage>
              </div>
            </div>

            <div>
              <label htmlFor="job">job: </label>
              <Field name="job" id="job" type="text" as="select">
                <option value="job1">job1</option>
                <option value="job2">job2</option>
                <option value="job3">job3</option>
              </Field>
              <div>
                <ErrorMessage name="introduction"></ErrorMessage>
              </div>
            </div>

            <div>
              <label htmlFor="term">accept the term </label>
              <Field name="term" id="term" type="checkbox"></Field>

              <div>
                <ErrorMessage name="term"></ErrorMessage>
              </div>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpFormYupV2;
