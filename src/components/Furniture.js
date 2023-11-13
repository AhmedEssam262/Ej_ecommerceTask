import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Furniture() {
  return (
    <div className="container-fluid">
      <div style={{ textAlign: "center" }} className="pt-5">
        <h5 style={{ color: "#616161" }}>Share your setup with</h5>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="row g-0 gap-0">
        {/*Column 1*/}
        <div className="col-xl-5">
          {/*Row 1 */}
          <div className="row g-0 gap-0">
            <div className="col-xl-2">
              <img
                src="images/f1.png"
                alt=" 1"
                className="img1 img-fluid mb-sm-3"
              ></img>
            </div>
            <div className="col-xl-10">
              <img
                src="images/f2.png"
                alt="2"
                className="img2 img-fluid mt-xl-5 pt-xl-4 mb-sm-3"
              ></img>
            </div>
          </div>
          {/*Row 2 */}
          <div className="row g-0 gap-0 mt-3">
            <div className="col-xl-4 ">
              <img
                src="images/f3.png"
                alt="3"
                className="img3 img-fluid "
              ></img>
            </div>
            <div className="col-xl-8 ">
              <img
                src="images/f4.png"
                alt="4"
                className="img4 img-fluid"
              ></img>
            </div>
          </div>
        </div>

        {/*Column 2*/}
        <div className="col-xl-3 mt-xl-5 pt-xl-5  mt-md-5 pt-md-5">
          <img
            src="images/f5.png"
            alt="5"
            className="img5 img-fluid"
          ></img>
        </div>

        {/*Column 3*/}
        <div className="col-xl-4">
          {/*Row 1*/}
          <div className="row g-0 gap-0">
            <div className="col-xl-6 mt-xl-5 pt-xl-3">
              <img
                src="images/f6.png"
                alt="6"
                className="img6 img-fluid"
              ></img>
            </div>
            <div className="col-xl-6">
              <img
                src="images/f7.png"
                alt="7"
                className="img7 img-fluid"
              ></img>
            </div>
          </div>
          {/*Row 2*/}
          <div className="row g-0 gap-0 mt-3">
            <div className="col-xl-6">
              <img
                src="images/f8.png"
                alt="8"
                className="img8 img-fluid"
              ></img>
            </div>
            <div className="col-xl-6">
              <img
                src="images/f9.png"
                alt="9"
                className="img9 img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Furniture;
