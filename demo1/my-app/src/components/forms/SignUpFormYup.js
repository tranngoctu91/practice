import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpFormYup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(5, "5 ký tự thôi").required("required"),
      lastName: Yup.string().max(10, "10 ký tự thôi").required(),
    }),
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
            // value={formik.values.firstName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("firstName")}
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
            // value={formik.values.lastName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("lastName")}
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

export default SignUpFormYup;
