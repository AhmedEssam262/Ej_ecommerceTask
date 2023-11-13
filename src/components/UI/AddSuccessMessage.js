import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JavaScript (place this in your main JavaScript/React file)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function AddSuccessMessage(props) {
  return (
    <div>
      <div
        className="alert alert-success d-flex justify-content-center"
        role="alert"
      >
        {`${props.message}.......`}
        <img
          style={{ width: "20px" }}
          src={"../../images/success-green-check-mark-icon.png"}
          alt="success"
        />
      </div>
    </div>
  );
}

export default AddSuccessMessage;
