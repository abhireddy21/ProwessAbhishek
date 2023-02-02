import './css/cardhead.css'
function CardHead(props){
    const heading = props.headname
    return(
        <div className="main-head">
            <div className="head-cnt">
            <h3 className="heading">{heading}</h3>
            </div>
        </div>
    );
}
export default CardHead