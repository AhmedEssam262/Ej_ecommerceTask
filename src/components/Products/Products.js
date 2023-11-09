import ProductItem from "./ProductItem";
import '../../App.css'
import {useState} from "react";
function Products(props){
    const [maxNumberOfProducts, setMaxNumberOfProducts] = useState(8)
    return(
        <div>
            <div className="section2-browse mt-4 p-3">
                <h1 >Our Products</h1>
            </div>
            {props.data.content && !props.data.status.errorState &&<div className="container text-xl-start px-2 text-lg-center text-sm-center text-center">
                <div className="row">
                    <div className="container text-xl-start px-2 text-lg-center text-sm-center text-center">
                        <div className="row">
                            {props.data.content.map((data, index) => (
                                index < maxNumberOfProducts && (
                                    <div key={data.id} className="col-md-3 mb-3">
                                        <ProductItem product={data} />
                                    </div>
                                )
                            ))}
                        </div>

                    </div>
                </div>
                {(props.data.content.length>maxNumberOfProducts)&&<button
                    onClick={() => {
                        setMaxNumberOfProducts((maxNumberOfProducts) => maxNumberOfProducts + 4);
                    }}
                    className="btn btn-warning mt-3 mb-5"
                    style={{display: "block"}}
                >
                    Show More
                </button>}
            </div>}
            {!props.data.content &&<div className={"mb-3"} style={{textAlign:"center",fontSize:"60px"}}>No products found</div>}
            {props.data.status.errorState && <div className={"mb-3"} style={{textAlign:"center",fontSize:"60px"}}>{props.data.status.error}</div> || null}
        </div>
    );
}

export default Products;