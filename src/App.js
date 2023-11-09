import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import {useEffect, useState} from "react";
import axios from 'axios';
import Contact from "./Pages/Contact";
import AddNewProduct from "./Pages/AddNewProduct";
import EditProduct from "./Pages/EditProduct";
import './App.css';
import Card from "./components/UI/Card";

const products2=[
    {id:1,name:"Syltherine", paragraph:"Stylish cafe chair",price:"2.500.000",old_price:"3.500.000",prod_image:"images/p1.png",discount:"images/Label1.png"},
    {id:2,name:"Leviosa", paragraph:"Stylish cafe chair",price:"2.500.000",old_price:"",prod_image:"images/p2.png"},
    {id:3,name:"Lolito", paragraph:"Luxury big sofa",price:"7.000.000",old_price:"14.000.000",prod_image:"images/p3.png",discount:"images/Label2.png"},
    {id:4,name:"Respira", paragraph:"Outdoor bar table and stool",price:"500.000",old_price:"",prod_image:"images/p4.png",discount:"images/Label3.png"},
    {id:5,name:"Grifo", paragraph:"Night lamp",price:"1.500.000",old_price:"",prod_image:"images/p5.png"},
    {id:6,name:"Muggo", paragraph:"Small mug",price:"Rp 150.000",old_price:"",prod_image:"images/p6.png",discount:"images/Label3.png"},
    {id:7,name:"Pingky", paragraph:"Cute bed set",price:"7.000.000",old_price:"14.000.000",prod_image:"images/p7.png",discount:"images/Label2.png"},
    {id:8,name:"Potty", paragraph:"Minimalist flower pot",price:"500.000",old_price:"",prod_image:"images/p8.png",discount:"images/Label3.png"},
]

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchData();
    }, []);
    function DeleteHandle(data){
        setProducts(data);
    }
    async function fetchData() {
        setLoading(true);
        try {
            const response = await axios.get("https://650849f956db83a34d9c1146.mockapi.io/products");
            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = response.data;
            setProducts(result);
            setLoading(false);
            setError(false);
            console.log(products);
        } catch (error) {
            setError("Error 404");
        }
    }

    let content=null;
    if(products.length>0){
        content=products;
    }
    if(error){
        content="error"
    }

    const status={
        loading:loading,
        errorState:error?1:0,
        error:error,
        deleteFromApp:DeleteHandle
    }
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Home data={{content,status}}/>}/>
                    <Route path="dashboard/add" element={<AddNewProduct/>}></Route>
                    <Route path="dashboard" element={<Dashboard data={{content,status}}/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="card" element={<Card/>}/>
                    <Route path="dashboard/edit/:id" element={<EditProduct/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
