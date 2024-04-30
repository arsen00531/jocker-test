import React from "react";
import './AboutMe.css'
import Close from "../Close";
import closeIcon from '../../../images/icons/close.svg'
const AboutMe = ({setAboutMeModal}) => {





    return (
        <div className="aboutMeContainer">
            <div className="top">
                {/* <div className='close' >
                    <div className="close__wrapper" >

                    </div>
                    <div className="close__container" style={{position : 'relative'}}>
                        <span></span>
                        <span></span>
                    </div>
                </div> */}
                <img onClick={() => {
                    setAboutMeModal(false)
                }} src={closeIcon} alt="" />
                <p>О себе</p>
                <p>✔</p>
            </div>
            <div className="about__reason">
                <p>Опишите свой опыт, подход к работе.</p>
                <p>Почему заказ нужно доверить именно вам?</p>
            </div>
            <p>О себе</p>
            <div className="inputBlock">
                <textarea className="textArea" name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>

    )
}
export default AboutMe;




