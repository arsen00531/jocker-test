import React, { useEffect, useState } from 'react';
import AdCreatingOne from './AdCreatingOne/AdCreatingOne/AdCreatingOne';
import AdCreatingThree from './AdCreatingThree/AdCreatingThree';
import AdCreatingTwo from './ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'

import { motion, transform } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskInformation } from '../store/information';
import BackButton from '../constants/BackButton';
import MainButton from '../constants/MainButton';
import { useNavigate } from 'react-router-dom';

const variants = {
    initial : {opacity : 0},
    animate : {opacity : 1},
    transition : {duration : 0.4}
    }

const AdCreating = () => {
    const taskInformation = useSelector(state => state.information.taskInformation)

    const dispatch = useDispatch()

    function setTaskInformation(arg) {
        dispatch( changeTaskInformation(arg) )
    }

    const tonConstant = useSelector(state => state.ton.value)
    
    const [stationNow , setStationNow] = useState(0)

    const navigate = useNavigate()

    function goForward(){
        if (stationNow !== -200){
            setStationNow(stationNow - 100)
            if ( (stationNow - 100) === -200){
                MainButton.setText('ЗАКОЛДИРОВАТЬ')
            }
        }
    }
    function goBack(){
        if (stationNow === 0){
            navigate(-1)
        }
        else{
            setStationNow(stationNow + 100)
            if (stationNow === -100){

            }
        }
    }



    
    if (stationNow === -200){
        MainButton.setText('ЗАКОЛДИРОВАТЬ')
    }
    else{
        MainButton.setText('ДАЛЕЕ')
    }
    
    useEffect ( () => {
        MainButton.show()
        BackButton.show()
        return ( ) => {
            BackButton.hide()
            MainButton.hide()
        }
    } , [] )

    useEffect (  () => {
        MainButton.onClick ( goForward )
        BackButton.onClick( goBack )
        return () => {
            BackButton.offClick(goBack)
            MainButton.offClick(goForward)
        }
    }  )

    return (
        <motion.div
        
        variants={variants}
        initial = "initial"
        animate = "animate"
        transition = "transition"
         className="AdCreating__container"
        style={{transform : 'translateX(' + stationNow.toString() + '%)', transition : '0.3s'}}>
            <AdCreatingOne setTaskInformation = {setTaskInformation}  taskInformation = {taskInformation} />
            <AdCreatingTwo setTaskInformation = {setTaskInformation} taskInformation = {taskInformation} tonConstant = {tonConstant} />
            <AdCreatingThree taskInformation = {taskInformation} />
        </motion.div>
    );
};

export default AdCreating;