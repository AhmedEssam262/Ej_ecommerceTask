import Copyrights from "../components/Copyrights";
import Header from "../components/Header/Header";
import '../App.css';
import AddForm from "../components/Dashboard/AddForm";
import AddEdit from "../components/Dashboard/AddEditForm";

function AddNewProduct(props){
    return(
        <div>
            <Header/>
            <div className="section2-browse mt-4 p-3">
                <h1 >Add a new product</h1>
            </div>
            <AddEdit/>
            <Copyrights/>
        </div>

    )
}
export default AddNewProduct