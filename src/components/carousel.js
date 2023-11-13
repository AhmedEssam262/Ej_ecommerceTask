import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Carousel() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FCF8F3" }}>
      <div className="row">
        <div className=" col-xl-4 col-sm-12">
          <div className="beautiful ps-5">
            <h3 className="mt-4">50+ Beautiful rooms inspiration</h3>
            <h6>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </h6>
            <a href="/" className="btn btn-danger mt-3 mb-sm-5 mt-5">
              Explore More
            </a>
          </div>
        </div>

        <div className=" col-xl-4  col-sm-6">
          <div>
            <img
              src="images/inner-peace.png"
              className="py-4"
              style={{ width: "100%" }}
              alt="1"
            />
          </div>
        </div>

        <div className=" col-xl-4  col-sm-6">
          <div>
            <img
              src="images/inner2.png"
              className="py-4"
              style={{ width: "100%" }}
              alt="2"
            />
            <img src="images/dots.png" class="py-4" alt="3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
