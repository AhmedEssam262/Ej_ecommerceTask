import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Add this line for Bootstrap JavaScript
import {Link} from "react-router-dom";
import '../../App.css'

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-teiary"   >

            <div className="logodiv p-1 ps-4" style={{display: "inherit"}}>
                <img className="logo"  src="images/Meubel House_Logos-05.png" style={{display: "inline"}} ></img>
                <Link className="navbar-brand" style={{size: "34px", display: "inline"}} to="/">Furniro</Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mycont container-fluid">
                <div></div>
                <div className="nbar">
                    <div className="collapse navbar-collapse align-content-center " id="navbarSupportedContent">
                        <ul className="mobile-nav1 navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                            <Link to='/dashboard' className="nav-link active me-4" aria-current="page">Dashbaord</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active me-4" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link active me-4" href="#">Shop</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link active me-4" href="#">About</a>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active me-4" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nbar2">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="flexme mobile-nav2 navbar-nav  me-auto mb-2 mb-lg-0"  >
                            <li className="nav-item my-auto">
                                <a className=" mx-4" href="#"><img className="ico" src="images/Vector1.png"></img></a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="mx-4" href="#"><img className="ico" src="images/Vector2.png"></img></a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="mx-4" href="#"><img className="ico" src="images/Vector3.png"></img></a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="mx-4" href="#"><img className="ico" src="images/Vector4.png"></img></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}
export default Navbar;