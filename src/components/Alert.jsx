import React from "react";

const Alert = (props) => {
  const capitalise = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-info alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
};

export default Alert;
