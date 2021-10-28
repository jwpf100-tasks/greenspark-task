import React, { useState } from "react";

interface IOptionListText {
  text: string;
  tooltip?: boolean;
}

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkboxDiv">
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
          className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
          // This element is decorative so
          // we hide it for screen readers
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
