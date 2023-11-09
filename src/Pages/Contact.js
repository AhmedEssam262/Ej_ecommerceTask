import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

function Contact() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);



    return (
        <div className="App">
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
        </div>
    );
}

export default Contact;