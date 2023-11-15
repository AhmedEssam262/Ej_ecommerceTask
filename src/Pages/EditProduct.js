import Copyrights from "../components/Copyrights";
import EditForm from "../components/Dashboard/EditForm";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEdit from "../components/Dashboard/AddEditForm";
function EditProduct(props) {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get(
        `https://650849f956db83a34d9c1146.mockapi.io/products/${params.id}`
      );
      console.log(response.data);
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = response.data;
      setProducts(result);
      console.log(products);
    } catch (error) {}
  }
  return (
    <div>
      <Header />
      <div className="section2-browse mt-4 p-3">
        <h1>Update your product</h1>
      </div>
      <AddEdit data={products} />
      <Copyrights />
    </div>
  );
}
export default EditProduct;
