import React from "react";
import PropTypes from "prop-types";
import { Alert as RBCAlert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Alert.css";

const Alert = props => {
  const {
    keyOverride,
    variantOverride,
    showHeader,
    headerContent,
    bodyContent,
    showDismissible,
    showAlert,
    handleOnClose
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "react-rbc-alert"
  }, /*#__PURE__*/React.createElement(RBCAlert, {
    key: keyOverride,
    variant: variantOverride,
    dismissible: showDismissible,
    show: showAlert,
    onClose: handleOnClose
  }, showHeader && /*#__PURE__*/React.createElement(RBCAlert.Heading, null, headerContent), bodyContent));
};

Alert.prototype = {
  keyOverride: PropTypes.number,
  variantOverride: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  showHeader: PropTypes.bool,
  headerContent: PropTypes.string,
  bodyContent: PropTypes.string,
  showDismissible: PropTypes.bool,
  showAlert: PropTypes.bool,
  handleOnClose: PropTypes.func
};
Alert.defaultProps = {
  keyOverride: 0,
  variantOverride: "primary",
  showHeader: false,
  headerContent: "",
  bodyContent: "",
  showDismissible: false,
  showAlert: false,
  handleOnClose: () => null
};
export default Alert;