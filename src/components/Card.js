import { useState } from 'react';
import './css/card.css'
import './css/popup.css'
function Card(props) {
    const cName=props.cardName;
    const cNum=props.cardNum;
    const challengeNum=props.challNum;
    const[popup,setPopup]=useState(false);
    const togglePopup=()=>{
        setPopup(!popup)
    }
    if(popup){
        document.body.classList.add('active-popup');
    }else{
        document.body.classList.remove('active-popup');
    }
    return (
        <div>
            <div className="card-main" onClick={togglePopup}>
                <div class="card" >
                    <div class="img img1"></div>
                    <div class="img img2"><span class="top-title">Challenge - {challengeNum}</span></div>
                    <div class="card__content" >
                        <span class="card-title-head">{cName}</span>
                        <span class="num">{cNum}</span>
                    </div>
                </div>
                {popup &&(
                <div className="popup">
                    <div onClick={togglePopup} className="overlay"></div>
                    <div className="popup-content">
                        <h2>{cName}</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </p>
                        <button className="close-popup" onClick={togglePopup}>X</button>
                    </div>
                </div>
            )}
            </div>

        </div>
    );
}
export default Card