import React from "react";
import emoji from "react-easy-emoji";

const EMOJI = (input) => {
  return <span key={input}>{emoji(input)}</span>;
};

export default EMOJI;
