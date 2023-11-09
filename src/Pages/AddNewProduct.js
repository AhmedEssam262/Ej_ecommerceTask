import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Copyrights from "../components/Copyrights";
import EditForm from "../components/Dashboard/EditForm";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Header from "../components/Header/Header";
import '../App.css';
import AddForm from "../components/Dashboard/AddForm";

function AddNewProduct(props){
    return(
        <div>
            <Header/>
            <div className="section2-browse mt-4 p-3">
                <h1 >Add a new product</h1>
            </div>
            <AddForm/>
            <Copyrights/>
        </div>

    )
}
export default AddNewProduct