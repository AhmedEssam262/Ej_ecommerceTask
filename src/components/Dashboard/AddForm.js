import "bootstrap/dist/css/bootstrap.css";
import styling from "./InputForm.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import AddSuccessMessage from "../UI/AddSuccessMessage";
import "../../App.css";

function AddForm(props) {
  const linkRef = useRef();
  const [nameState, setNameState] = useState();
  const [priceState, setPriceState] = useState();
  const [oldPrice, setOldPrice] = useState();
  const [description, setDescription] = useState();
  const [AddMessage, setAddMessage] = useState(false);
  const [discount, setDiscount] = useState();
  const [hasLocalImage, setHasLocalImage] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [myImage, setMyImage] = useState();
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setMyImage(url);
        setHasLocalImage(true);
      });
    });
  };

  useEffect(() => {
    setMyImage(imageUrls[0]);
  }, [imageUrls]);

  const updatedData = {
    productName: nameState,
    price: priceState,
    oldPrice: oldPrice,
    description: description,
    discount: discount,
    hasLocalImage: hasLocalImage,
    imageUrl: myImage,
  };
  // console.log(props.data)
  // console.log(props.newProduct)
  async function AddNewProductHandler() {
    try {
      const response = await axios.post(
        `https://650849f956db83a34d9c1146.mockapi.io/products`,
        updatedData
      );
      console.log(imageUrls);

      if (response.status === 201) {
        // Update was successful
        setMyImage(imageUrls[0]);
        console.log("Product added successfully");
        setAddMessage(true);
        setTimeout(() => {
          setAddMessage(false);
          linkRef.current.click();
          window.location.reload();
        }, 2000);
      } else {
        console.error("Update request was not successful");
        // Handle the error or notify the user of the error
      }
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle the error or notify the user of the error
    }
  }
  return (
    <div className={"container my-5"}>
      {AddMessage && (
        <AddSuccessMessage message="Product is added Successfully." />
      )}

      <div className="input-group mb-3">
        <div className={"row w-100 justify-content-center"}>
          <div className="col-xl-2 col-6 input-group-prepend">
            <span
              className={`${styling.productFlag} input-group-text`}
              id="basic-addon1"
            >
              Product Name
            </span>
          </div>
          <div className={"col-xl-6 col-6 "}>
            <input
              onChange={(e) => setNameState(e.target.value)}
              defaultValue={props.data ? props.data.productName : null}
              type="text"
              className={`${styling.inputElement} form-control border-start-0 border-end-0 border-top-0 border-black rounded-0 mx-2 p-0`}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>

      <div className={"input-group mb-3"}>
        <div
          className={
            "row w-100 justify-content-xl-center justify-content-start"
          }
        >
          <div className="col-xl-1 col-4 input-group-prepend">
            <span
              className={`${styling.productFlag} input-group-text`}
              id="basic-addon1"
            >
              Price
            </span>
          </div>
          <div className={"col-xl-1 col-1"}></div>
          <div className={"col-xl-3 col-5"}>
            <input
              onChange={(e) => setPriceState(e.target.value)}
              defaultValue={null}
              type="text"
              className={`${styling.inputElement} form-control border-start-0 border-end-0 border-top-0 border-black rounded-0 mx-2 p-0`}
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className={"col-xl-1 col-2"}>
            <span className="input-group-text">.00 Rp</span>
          </div>
          <div className={"col-xl-2 col-1"}></div>
        </div>
      </div>
      <div className={"input-group mb-3"}>
        <div
          className={
            "row w-100 justify-content-xl-center justify-content-start"
          }
        >
          <div className="col-xl-1 col-4 input-group-prepend">
            <span
              className={`${styling.productFlag} input-group-text`}
              id="basic-addon1"
            >
              Old Price
            </span>
          </div>
          <div className={"col-xl-1 col-1"}></div>
          <div className={"col-xl-3 col-5"}>
            <input
              onChange={(e) => setOldPrice(e.target.value)}
              defaultValue={null}
              type="text"
              className={`${styling.inputElement} form-control border-start-0 border-end-0 border-top-0 border-black rounded-0 mx-2 p-0`}
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className={"col-xl-1 col-2"}>
            <span className="input-group-text">.00 Rp</span>
          </div>
          <div className={"col-xl-2 col-1"}></div>
        </div>
      </div>

      <div className={"input-group mb-3"}>
        <div
          className={
            "row w-100 justify-content-xl-center justify-content-start"
          }
        >
          <div className="col-xl-1 col-4 input-group-prepend">
            <span
              className={`${styling.productFlag} input-group-text`}
              id="basic-addon1"
            >
              Discount
            </span>
          </div>
          <div className={"col-xl-1 col-1"}></div>
          <div className={"col-xl-3 col-5"}>
            <input
              onChange={(e) => setDiscount(e.target.value)}
              defaultValue={null}
              type="text"
              className={`${styling.inputElement} form-control border-start-0 border-end-0 border-top-0 border-black rounded-0 mx-2 p-0`}
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className={"col-xl-1 col-2"}>
            <span className="justify-content-center input-group-text">%</span>
          </div>
          <div className={"col-xl-2 col-1"}></div>
        </div>
      </div>

      <div className="input-group">
        <div
          className={
            "row w-100 justify-content-xl-center justify-content-start"
          }
        >
          <div className={"col-xl-2 col-6"}>
            <span
              className={`${styling.productFlag} input-group-text`}
              id="basic-addon1"
            >
              Product description
            </span>
          </div>
          <div className={"col-xl-6 col-6"}>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={null}
              className={`${styling.inputElement} form-control`}
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
      </div>

      <br />

      <div className="input-group mb-3">
        <div
          className={
            "row w-100 justify-content-xl-center justify-content-start"
          }
        >
          <div className={"col-xl-2 col-3"}></div>
          <div className={"col-xl-2 col-4"}>
            <span
              className={`${styling.productFlag} input-group-text`}
              id="basic-addon1"
            >
              image
            </span>
          </div>
          <div className={"col"}>
            <div className="custom-file">
              <input
                type="file"
                onInput={(event) => {
                  setImageUpload(event.target.files[0]);
                  setHasLocalImage(true);
                  uploadFile();
                  setMyImage(setImageUrls[0]);
                }}
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                  setHasLocalImage(true);
                  uploadFile();
                  setMyImage(setImageUrls[0]);
                }}
                className={" custom-file-input"}
              />
            </div>
            <div className={"mt-3"}>
              <img
                src={myImage}
                style={{ height: "80px", width: "80px" }}
                alt="product"
              />
            </div>{" "}
          </div>
          <div className="d-flex justify-content-start mt-5">
            <button
              onClick={AddNewProductHandler}
              style={{
                top: "0",
                left: "0",
                transition: "background-color 0.3s, color 0.3s",
                ":hover": {
                  backgroundColor: "#B88E2F", // Change background color on hover
                  color: "white", // Change text color on hover
                },
              }}
              className="btn btn-warning"
            >
              {"Add"}
            </button>
            <Link to="../" style={{ display: "none" }} ref={linkRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddForm;
