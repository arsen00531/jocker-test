import React, { useEffect, useMemo, useRef, useState } from "react";
import './AboutMe.css'
import Close from "../Close";
import closeIcon from '../../../images/icons/close.svg'
const AboutMe = ({setAboutMeModal ,setAboutU , aboutU  , aboutMeModal}) => {
    const [inf , setInf] = useState(aboutU)
    const aboutMeRef = useRef(null)
    const [pos , setPos] = useState(0)
    const [startMove , setStartMove ] = useState(0)
    const animateAboutMe = useMemo(() => {
        if (aboutMeModal) {
          return { transform: `translateY(${pos}px)` , transition : '0s' };
        } else {
          return { transform: "translateY(150%)" };
        }
      } , [aboutMeModal , pos]);
    
    
    // useEffect( () => {
    //     let start;
    //     let end;
    //     if(aboutMeRef.current ){
    //         window.addEventListener('touchstart' , (e) => {
    //             start = e.touches[0].pageY

    //         })
    //         window.addEventListener('touchmove', (e) => {

    //             setPos(e.touches[0].pageY)
                

    //         })
    //         window.addEventListener('touchend' , (e) => {
    //             end = e.touches.screen
    //         })
    //         // aboutMeRef.addEventListener('touchmove' , () => {

    //         // })
    //     }
    // } )




    const handleTouch = (e) => {
        setPos( (e.touches[0].pageY - startMove).toFixed(0))
    }



    return (
        <div ref={aboutMeRef} className="aboutMe"  onTouchMove={handleTouch}
        style={animateAboutMe}
        onTouchStart = {(e) => {
            
            setStartMove(e.touches[0].pageY)
        }}
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




