import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";

const Alert = (props) => {
  const { keyOverride, variantOverride, bodyContent } = props;

  return (
    <div
      key={keyOverride}
      class={`react-rbc-alert alert alert-${variantOverride}`}
      role='alert'
    >
      {bodyContent}
    </div>
  );
};

Alert.prototype = {
  keyOverride: PropTypes.number,
  variantOverride: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ]),
  bodyContent: PropTypes.string
};

Alert.defaultProps = {
  keyOverride: 0,
  variantOverride: "primary",
  bodyContent: ""
};

export default Alert;
