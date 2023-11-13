import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddSuccessMessage from "../UI/AddSuccessMessage";
import "../../App.css";
import classes from "./ShowProducts.module.css";

function ShowProducts(props) {
  const [products, setProducts] = useState(props.data.content);
  useEffect(() => {
    setProducts(props.data.content);
  });
  console.log(props.data.content);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [fade, setFade] = useState(false);
  const handleConfirmation = (id) => {
    setDeleteID(id);
    setShowConfirmation(true);
    setFade(true);
  };
  const [deleteID, setDeleteID] = useState();
  const handleCancel = () => {
    // Handle the cancellation logic here
    setShowConfirmation(false);
    setFade(false);
  };
  const handleDelete = (productId) => {
    // Make a DELETE request to your API endpoint to delete the product
    axios
      .delete(
        `https://650849f956db83a34d9c1146.mockapi.io/products/${deleteID}`
      )
      .then((response) => {
        // Check if the delete request was successful
        if (response.status === 200) {
          // Product deleted successfully, update the products state
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== deleteID)
          );
          props.data.status.deleteFromApp((prevProducts) =>
            prevProducts.filter((product) => product.id !== deleteID)
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
    setShowConfirmation(false);
    setDeleteMessage(true);
    setFade(false);
    setTimeout(() => {
      setDeleteMessage(false);
    }, 2000);
  };

  return (
    <div className={"container"}>
      {fade && <div className={classes.backdrop}></div>}
      {deleteMessage && (
        <AddSuccessMessage message="Product is deleted Successfully." />
      )}
      <div className="d-flex justify-content-start mt-3">
        <Link
          style={{ top: "0", left: "0" }}
          to="/dashboard/add"
          className="btn btn-warning"
        >
          Add new product
        </Link>
      </div>
      {props.data.content && !props.data.status.errorState && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">product name</th>
              <th scope="col">Price</th>
              <th scope="col">Old Price</th>
              <th scope="col">Discount</th>
              <th scope="col">description</th>
              <th scope="col">image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((data, index) => (
                <tr key={index}>
                  <th>{data.id}</th>
                  <td>{data.productName}</td>
                  <td>{data.price}</td>
                  <td>{data.oldPrice}</td>
                  <td>{data.discount}</td>
                  <td>{data.description}</td>
                  <td>
                    <img
                      src={data.hasLocalImage ? data.imageUrl : data.avatar}
                      style={{ height: "40px" }}
                      alt="product"
                    />
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/edit/${data.id}`}
                      type="button"
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      style={{ background: "red" }}
                      onClick={() => handleConfirmation(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {showConfirmation && (
                      <div
                        className={"d-flex justify-content-center modal"}
                        style={{ backgroundColor: "transparent" }}
                        role="dialog"
                      >
                        <div
                          style={{ width: "50%" }}
                          className="modal-dialog"
                          role="document"
                        >
                          <div
                            className={`${classes.modal} modal-content`}
                            style={{ backgroundColor: "azure" }}
                          >
                            <div className="modal-header">
                              <h5 class="modal-title">Confirm</h5>
                              <button
                                onClick={() => handleCancel()}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>Are You sure </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                onClick={() => handleDelete(data.id)}
                                className="btn btn-secondary"
                                style={{ background: "red" }}
                              >
                                Save changes
                              </button>
                              <button
                                onClick={() => handleCancel()}
                                type="button"
                                className="btn btn-secondary"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                  {/*<td><button onClick={() => handleDelete(data.id)} type="button" className="btn btn-secondary" style={{ background: "red" }}>Delete</button></td>*/}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowProducts;
