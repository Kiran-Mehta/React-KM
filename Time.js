import React from "react";
import PropTypes from "prop-types";

export default function Time({ date }) {
  return <div>{date.toLocaleString()}</div>;
}

Time.protoTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

// Time.defaultProps = {
//   date:
// };
