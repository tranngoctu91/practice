import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropDown, setShowDropdowm] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    const handleClickOutDropdown = (e) => {
      debugger;
      if (dropDownRef.current && e.target.contains(dropDownRef.current)) {
        setShowDropdowm(false);
      }
    };
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  return (
    <div ref={dropDownRef}>
      <div className="" onClick={() => setShowDropdowm(!showDropDown)}>
        Select
      </div>
      {showDropDown && (
        <div>
          <div>Option1</div>
          <div>Option2</div>

          <div>Option3</div>

          <div>Option4</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
