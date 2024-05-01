import React, { useEffect, useMemo, useRef, useState } from "react";
import './AboutMe.css'
import Close from "../Close";
import closeIcon from '../../../images/icons/close.svg'
let animation = true
const AboutMe = ({setAboutMeModal ,setAboutU , aboutU  , aboutMeModal}) => {
    const [inf , setInf] = useState(aboutU)
    const aboutMeRef = useRef(null)
    const [pos , setPos] = useState(0)
    const [startMove , setStartMove ] = useState(0)
    const [tran , setTran] = useState('0.4s')
    const animateAboutMe = useMemo(() => {
        if (aboutMeModal) {
            if ( animation ){
                animation = false
                setTimeout(() => {
                    setTran('0s')
                } , 400)
            }
          return { transform: `translateY(${pos}px)` , transition : tran };
        } else {
          return { transform: "translateY(150%)" };
        }
      } , [aboutMeModal , pos , tran]);
    
    
    const handleTouch = (e) => {
        let position = (e.touches[0].pageY - startMove).toFixed(0)
        if (position < 0) {
            setPos(0)
        }
        else{
            setPos(position)
        }
    }
    const endTouchHandler = () => {
        if (pos > 150){
            setAboutMeModal(false)
            setPos(0)
            setTran('0.4s')
            animation = true
        }
        else{
            setPos(0)
        }
    }
 


    return (
        <div ref={aboutMeRef} className="aboutMe"  onTouchMove={handleTouch}
        style={animateAboutMe}
        onTouchStart = {(e) => {
            
            setStartMove(e.touches[0].pageY)
        }}
        onTouchEnd={endTouchHandler}  
        >
            <div  className="aboutMeContainer">
                <div className="top">
                    <img onClick={() => {
                        setAboutMeModal(false)
                    }} src={closeIcon} alt="" />
                    <p>О себе</p>
                    <p className="save" onClick={ () => {
                        setAboutU(inf)
                        setAboutMeModal(false)
                    }}>✔</p>
                </div>
                <div className="about__reason">
                    <p>Опишите свой опыт, подход к работе.</p>
                    <p>Почему заказ нужно доверить именно вам?</p>
                </div>
                <p>О себе</p>
                <div className="inputBlock">
                    <textarea onChange={ (e) => {
                        console.log(inf)
                        setInf(e.target.value)
                    }} value={inf} spellCheck = {false} className="textArea" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;




