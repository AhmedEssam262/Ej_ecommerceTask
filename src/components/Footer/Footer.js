import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css'
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";
import FooterSection4 from "./FooterSection4";
function Footer(){
    return(
        <div className="container text-xl-start text-lg-center text-sm-center text-center" >
            <div className="row mb-4 ">
                <FooterSection1/>
                <FooterSection2/>
                <FooterSection3/>
                <FooterSection4/>
            </div>
        </div>
    );
}
export default Footer;