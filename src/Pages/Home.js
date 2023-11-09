import NewArrival from "../components/NewArrival";
import Products from "../components/Products/Products";
import Carousel from "../components/carousel";
import Furniture from "../components/Furniture";
import Footer from "../components/Footer/Footer";
import Copyrights from "../components/Copyrights";
import Navbar from "../components/Header/Navbar";
import Rooms from "../components/Rooms/Rooms";
import "../App.css";
function Home(props) {
  return (
    <div>
      <Navbar />
      <NewArrival />
      <Rooms />
      <Products data={props.data} />
      <Carousel />
      <br/>
      <Furniture />
      <hr/>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default Home;
