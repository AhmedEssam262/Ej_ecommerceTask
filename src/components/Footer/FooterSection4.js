import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css'
import styling from "../Dashboard/InputForm.module.css"

function FooterSection4(){
    return(
        <div className=" col-xl-4 mb-4 mt-5 mx-0" >
            <div>
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="links nav-item">
                            <a style={{color: "#9F9F9F"}} className="nav-link active  mb-4 " aria-current="page" href="#">Newsletter</a>
                        </li>
                    </ul>
                    <div className="input-group mb-3">
                        <input type="text" className={`${styling.inputElement} form-control border-start-0 border-end-0 border-top-0 border-black rounded-0 mx-2 p-0`}  placeholder="Enter Your Email Address" aria-label="" aria-describedby="basic-addon1"></input>
                        <div className="input-group-prepend">
                            <button className="subscribe border-start-0 border-end-0 border-top-0 mt-3" style={{fontSize:"18px"}} type="submit">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default FooterSection4;