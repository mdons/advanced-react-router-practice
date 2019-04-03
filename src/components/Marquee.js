import React from "react";

function Marquee(props) {
  console.log(props);
  const message = props.match.params.text;
  return <marquee>{message}</marquee>;
}

export default Marquee;
