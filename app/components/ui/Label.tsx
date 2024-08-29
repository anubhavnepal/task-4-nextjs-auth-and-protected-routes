import React from "react";

const Label = ({ htmlFor, title }: LabelParams) => {
  return (
    <label htmlFor={htmlFor} className="block text-gray-700">
      {title}
    </label>
  );
};

export default Label;
