import { useState } from "react";

export default function useHandleChange(initialValue) {
  const [values, setValues] = useState(initialValue);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    handleInputChange,
    values,
    setValues,
  };
}
