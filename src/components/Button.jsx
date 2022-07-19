import React from "react";

const Button = (props) => {
  return (
    <button className="text-white text-lg bg-neutral-500 hover:text-lg dark:bg-zinc-800 rounded-lg p-2" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
