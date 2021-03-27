import React from "react";
import PropTypes from "prop-types";
import { Alert as RBCAlert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Alert.css";

const Alert = props => {
  const {
    keyOverride,
    variantOverride,
    bodyContent
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "react-rbc-alert"
  }, /*#__PURE__*/React.createElement(RBCAlert, {
    key: keyOverride,
    variant: variantOverride
  }, bodyContent));
};

Alert.prototype = {
  keyOverride: PropTypes.number,
  variantOverride: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  bodyContent: PropTypes.string
};
Alert.defaultProps = {
  keyOverride: 0,
  variantOverride: "primary",
  bodyContent: ""
};
export default Alert;