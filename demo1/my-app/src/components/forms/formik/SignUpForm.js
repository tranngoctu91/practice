import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "must be less than 20 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }
  return errors;
};
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate,
    onSubmit: (values) => {},
  });

  console.log(formik);
  return (
    <div>
      <form onSubmit={formik.handleSubmit} action="">
        <div>
          <label htmlFor="firstName">first name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>
              <small>{formik.errors.firstName}</small>
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName">last name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>
              <small>{formik.errors.lastName}</small>
            </div>
          ) : null}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
