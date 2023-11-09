import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css'
function FooterSection2(){
    return(
        <div className=" col-xl-2 mb-4 mt-5" >
            <div>
                <div >
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a style={{color: "#9F9F9F"}} className="nav-link active mx-xl-4 mb-4 " aria-current="page" href="#">Links</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-4 mb-4" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-4 mb-4" href="#">Shop</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-4 mb-4" href="#">About</a>
                        </li>
                        <li className="links nav-item">
                            <a className="nav-link active mx-xl-4 mb-4" href="#">Content</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
export default FooterSection2;