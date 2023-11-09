import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Copyrights from "../components/Copyrights";
import EditForm from "../components/Dashboard/EditForm";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Home from "./Home";
import ProductDetails from "../components/Dashboard/ProductDetails";
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