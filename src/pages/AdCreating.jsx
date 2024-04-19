import React, { useEffect, useState } from 'react';
import AdCreatingOne from './AdCreatingOne/AdCreatingOne/AdCreatingOne';
import AdCreatingThree from './AdCreatingThree/AdCreatingThree';
import AdCreatingTwo from './ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'

import { motion, transform } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskInformation } from '../store/information';
import BackButton from '../constants/BackButton';
import MainButton from '../constants/MainButton';

const variants = {
    initial : {opacity : 0},
    animate : {opacity : 1},
    transition : {duration : 0.35}
    }

const AdCreating = () => {
    const taskInformation = useSelector(state => state.information.taskInformation)

    const dispatch = useDispatch()

    function setTaskInformation(arg) {
        dispatch( changeTaskInformation(arg) )
    }

    const tonConstant = useSelector(state => state.ton.value)

    const [stationNow , setStationNow] = useState(0)



    function goForward(){
        if (stationNow !== -200){
            setStationNow(stationNow - 100)
            MainButton.setText('ДАЛЕЕ')
        }
        else{
            MainButton.setText('ЗАКОЛДИРОВАТЬ')
        }
    }

    useEffect (  () => {
        MainButton.show()
        MainButton.onClick ( goForward )

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