import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  const { handleInputChange, values } = useHandleChange({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [emailError, setEmailError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (values.email === "") {
      setEmailError("email is empty");
    }
  };
  console.log(values);
  return (
    <div>
      <form action="" onSubmit={handleSubmitForm}>
        <div>
          <input
            placeholder="email"
            onChange={handleInputChange}
            type="text"
            name="email"
          />
          {emailError}
        </div>

        <div>
          <input
            placeholder="password"
            onChange={handleInputChange}
            type="text"
            name="password"
          />
        </div>

        <div>
          <input
            onChange={handleInputChange}
            type="checkbox"
            name="rememberMe"
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
