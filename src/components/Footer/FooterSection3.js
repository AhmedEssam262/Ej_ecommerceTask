import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css'
function FooterSection3(){
    return(
        <div className=" col-xl-2 mb-4 mt-5" >
            <div>
                <div >
                    <ul className="navbar-nav ">
                        <li className="links nav-item">
                            <a style={{color: "#9F9F9F"}} className="nav-link active mx-xl-2 mb-4 " aria-current="page" href="#">Help</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-2 mb-4" aria-current="page" href="#">Payment Options</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-2 mb-4" href="#">Returns</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-2 mb-4" href="#">Privacy Policies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default FooterSection3;