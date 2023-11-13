import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Copyrights from "../components/Copyrights";
import ShowProducts from "../components/Dashboard/ShowProducts";
import '../App.css';
function Dashboard(props){
    return(
        <div>
            <Navbar/>

            <ShowProducts data={props.data}/>
            <Footer/>
            <Copyrights/>
        </div>

    )
}
export default Dashboard