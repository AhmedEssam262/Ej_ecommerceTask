
import React from 'react';
import AddSuccessMessage from "./AddSuccessMessage";

// Import Bootstrap JavaScript (place this in your main JavaScript/React file)
function ConfirmationButton() {
    return (
        <div>
           <AddSuccessMessage message="Product is deleted Successfully."/>
        </div>
    );
}

export default ConfirmationButton;
