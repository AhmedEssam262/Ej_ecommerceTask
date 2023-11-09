import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
function NewArrival() {
  return (
    <section>
      <div style={{ width: "100%" }}>
        <div className="card card-overlay rounded-0" style={{ width: "100%" }}>
          <img
            src="images/scandinavian-interior-mockup-wall-decal-background 1.png"
            className="card-img"
            style={{ border: "none" }}
          />
          <div className="card  ps-xl-4 me-xl-5">
            <div className="card-body">
              <div className="mt-xl-5">New Arrival</div>
              <div className="discover">Discover Our</div>
              <div className="discover">New Collection</div>
              <div className="phrase mb-xl-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </div>
              <a href="#" class="btn btn-primary ">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewArrival;
