import RoomItem from "./RoomItem";
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css'
function Rooms(){
    return(
        <div>
            <div className="section2-browse m-5 p-3">
                <h1 className="fs-3">Browse The Range</h1>
                <h2 className="fs-4" style={{color: "#666666"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className="container text-center px-2">
                <div className="row" >
                    <RoomItem roomName={"Dining"} image={"images/dining.png"}/>
                    <RoomItem roomName={"Living"} image={"images/living.png"}/>
                    <RoomItem roomName={"Bedroom"} image={"images/bedroom.png"}/>
                </div>
            </div>
        </div>
    );
}
export default Rooms;