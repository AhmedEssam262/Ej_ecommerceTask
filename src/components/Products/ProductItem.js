import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

function ProductItem(props) {
  // console.log(props.product);

  return (
    <div className={"prod"}>
      <div style={{ backgroundColor: "#F4F5F7", position: "relative" }}>
        <div className="wrapper">
          <img className="play" src="images/Label.png" alt="Label Image" />
          <div
            className={"playNumber"}
            style={{ color: "white" }}
          >{`-${props.product.discount}%`}</div>
          <img
            className="prodimg"
            style={{ height: "301px", width: "285px" }}
            src={
              props.product.hasLocalImage
                ? props.product.imageUrl
                : props.product.avatar
            }
            alt="Product Image"
          />
        </div>
        <div>
          <h4 className="mt-4 ps-3">{props.product.productName}</h4>
          <h6 className="ps-3" style={{ color: "#898989" }}>
            {props.product.description}
          </h6>
          <div className="container">
            <div className="row">
              <div className="col-6 mb-3">Rp {props.product.price}</div>
              <div
                style={{ color: "#B0B0B0", textDecoration: "line-through" }}
                className="col-6"
              >
                {props.product.oldPrice ? "Rp " + props.product.oldPrice : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info">
        <div className="add-to-cart">
          <button className="btn btn-danger px-5">Add to Cart</button>
        </div>
        <div className="like-dislike">
          <button className="btn-like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-share-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg>{" "}
            Share
          </button>
          <button className="btn-like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>{" "}
            Compare
          </button>
          <button className="btn-dislike">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>{" "}
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
