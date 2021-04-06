import React from "react";
import currency from "currency.js";

const InputField = (props) => {
  return (
    <div>
      <div className="text-white mt-2 text-lg font-bold tracking-wider">
        {props.label}
      </div>
      <input
        name={props.name}
        className="focus:outline-none focus:ring focus:border-blue-600 rounded-md p-1 pl-2 pr-2 text-sm tracking-wide text-gray-600"
        type={props.type}
        value={props.type === "number" ? parseInt(props.value) : props.value}
        onChange={(e) => props.onChange(e, props.i)}
      />
    </div>
  );
};

export default InputField;
