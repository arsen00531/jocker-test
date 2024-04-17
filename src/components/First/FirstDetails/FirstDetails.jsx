import React from 'react';
import FirstBlock from '../FirstMain/FirstBlock';
import TaskDetailsContainer from './TaskDetailsContainer';
import TimeAndWatches from './TimeAndWatches';
import SimilarAds from './SimilarAds';

const FirstDetails = ({  orderInformation , similarAds , isDetailsActive, setDetailsActive}) => {

    return (
        // <div className  =  {isDetailsActive ? 'TaskDetails active' : 'TaskDetails'} >
        //     <TaskDetailsContainer  orderInformation = {orderInformation} />
        //     <TimeAndWatches time={orderInformation.time} watches={orderInformation.watches} />
        //     <SimilarAds similarAds = {[]} />

        // </div>
        <div className  =  'TaskDetails' >
            <TaskDetailsContainer  orderInformation = {orderInformation} />
            <TimeAndWatches time={orderInformation.creationTime} watches={orderInformation.viewsNumber} />
            <SimilarAds similarAds = {[]} />

        </div>
    );
};

export default FirstDetails;