import React from "react";
import PropTypes from "prop-types";
import { Alert as RBCAlert } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Alert.css";

const Alert = (props) => {
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

  return (
    <div className='react-rbc-alert'>
      <RBCAlert
        key={keyOverride}
        variant={variantOverride}
        dismissible={showDismissible}
        show={showAlert}
        onClose={handleOnClose}
      >
        {showHeader && <RBCAlert.Heading>{headerContent}</RBCAlert.Heading>}
        {bodyContent}
      </RBCAlert>
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
  showHeader: PropTypes.bool,
  headerContent: PropTypes.string,
  bodyContent: PropTypes.string,
  showDismissible: PropTypes.bool,
  showAlert: PropTypes.bool,
  handleOnClose: PropTypes.func
};

Alert.defaultProps = {
  showAlert: false,
  showHeader: false,
  showDismissible: false,
  bodyContent: "",
  headerContent: "",
  keyOverride: 0,
  variantOverride: "primary",
  handleOnClose: () => null
};

export default Alert;
