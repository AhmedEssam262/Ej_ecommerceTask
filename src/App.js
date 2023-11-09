import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Pages/Contact";
import AddNewProduct from "./Pages/AddNewProduct";
import EditProduct from "./Pages/EditProduct";
import "./App.css";
import Card from "./components/UI/Card";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://650849f956db83a34d9c1146.mockapi.io/products"
      );
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
  function DeleteHandle(data) {
    setProducts(data);
  }
  let content = null;
  if (products.length > 0) {
    content = products;
  }
  if (error) {
    content = "error";
  }
  const status = {
    loading: loading,
    errorState: error ? 1 : 0,
    error: error,
    deleteFromApp: DeleteHandle,
  };
  return (
    <div className="App">
      <BrowserRouter>
        {/* content represents data and status is to now if app loadin or there is an error or not  */}
        <Routes>
          <Route path="/" element={<Home data={{ content, status }} />} />
          <Route path="dashboard/add" element={<AddNewProduct />}></Route>
          <Route
            path="dashboard"
            element={<Dashboard data={{ content, status }} />}
          />
          <Route path="contact" element={<Contact />} />
          <Route path="card" element={<Card />} />
          <Route path="dashboard/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
