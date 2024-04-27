import React, { useEffect, useState } from 'react';
import AdCreatingOne from './AdCreatingOne/AdCreatingOne/AdCreatingOne';
import AdCreatingThree from './AdCreatingThree/AdCreatingThree';
import AdCreatingTwo from './ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'

import { motion, transform } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addMyAds, changeTaskInformation } from '../store/information';
import BackButton from '../constants/BackButton';
import MainButton from '../constants/MainButton';
import { useNavigate } from 'react-router-dom';

const variants = {
    initial : {opacity : 0},
    animate : {opacity : 1},
    transition : {duration : 0.4}
}


const AdCreating = () => {

    const [taskInformation , setTaskInformation]  =  useState (useSelector(state => state.information.taskInformation) )
    

    const tonConstant = useSelector(state => state.ton.value)
    
    const [stationNow , setStationNow] = useState(0)

    const navigate = useNavigate()
    
    const dispatch = useDispatch()

    function goForward(){
        if (stationNow % 100 !== 0){
            setStationNow( Number(stationNow.toString().slice(0 , stationNow.toString().length - 1 ) + '0')  )
        }
        if (stationNow !== -200){
            if ( (stationNow - 100) === -200){
                MainButton.setText('ЗАКОЛДИРОВАТЬ')
            }
            setStationNow(stationNow - 105)
            setTimeout( () => {
            } , 310 )
                setStationNow(stationNow - 100)
        }
        else{
            dispatch(changeTaskInformation (taskInformation) )
            navigate('/MyAds')
            alert('отправлено!')
            MainButton.hide()
        }
    }
    function goBack(){
        if (stationNow === 0){
            navigate(-1)
        }
        else{
            if (stationNow % 100 !== 0){
                setStationNow=( Number(stationNow.toString().slice(0 , stationNow.toString().length - 1 ) + '0')  )
            }
            setStationNow(stationNow + 105)
            setTimeout( () => {
                setStationNow(stationNow + 100)
            } , 310 )
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
    useEffect( () => {
        MainButton.onClick ( goForward )
        BackButton.onClick( goBack )
        return () => {
            BackButton.offClick(goBack)
            MainButton.offClick(goForward)        
        }

    } )
    
    
    useEffect (  () => {
        MainButton.show()
        BackButton.show()
        return () => {
            MainButton.hide()
        }
    } , [] )

    return (
        <motion.div
         className="AdCreating__container"
         
        style={{transform : 'translateX(' + stationNow.toString() + '%)', transition : '0.3s'}}
        >
            <button style={{position : 'absolute'}} onClick={() => {goForward()}} >Выфвфывфы</button>
            <AdCreatingOne setTaskInformation = {setTaskInformation}  taskInformation = {taskInformation} />
            <AdCreatingTwo setTaskInformation = {setTaskInformation} taskInformation = {taskInformation} tonConstant = {tonConstant} />
            <AdCreatingThree taskInformation = {taskInformation} />
        </motion.div>
    );
};

export default AdCreating;