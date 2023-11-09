import {useParams} from "react-router-dom";

function ProductDetails(){
    const params=useParams()
    return (
        <div>
            <p>{`Product Details for ${params.productNumber}`}</p>
        </div>
    )
}

export default ProductDetails;