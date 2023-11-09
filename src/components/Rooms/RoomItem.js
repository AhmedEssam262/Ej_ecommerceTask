
function RoomItem(props){
    return(
        <div className="sec col-xl-4">
            <div className="">
                <img src={props.image}></img>
                <h3 className="mt-4">{props.roomName}</h3>
            </div>
        </div>
    )
}
export default RoomItem;