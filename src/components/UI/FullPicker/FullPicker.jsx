import React, { useEffect, useMemo, useRef, useState } from 'react';
import cl from './FullPicker.module.css'
const FullPicker = ({values , keys , nowKey , setNowKey, className}) => {

    const  MyValues = values.map((e, i) => (
        <p key = {i} className={cl.value} onClick={(e) => {
            setNowKey(keys[i]) 

        } 
        } >
        {e}
         </p>
    ))
    const trackRef = useRef(null)
    const numb = keys.length
    const [GreyIntWidth, setGreyIntWidth] = useState(0)
    const  [GreyWidth , setGreyWidth] = useState('0px')
    function change(){
        if (trackRef.current){

            setGreyIntWidth((document.documentElement.clientWidth  - 36) / numb)
            setGreyWidth(GreyIntWidth.toString() + 'px')
        }
    }
    useEffect( ()=> {   
        change()
        window.addEventListener('resize' , change)
        return ()=> {window.removeEventListener('resize' , change)}
    } , [GreyIntWidth ,  GreyWidth] )

    const myTransform = useMemo( () => {
        for (let i = 0; i < keys.length ; i++ ){
            if (nowKey === keys[0]){
                return 'translateX(2px)'
            }
            if (nowKey === keys[i]){
                return 'translateX(' + ((GreyIntWidth*i) + 2).toString() + 'px)'
            }
        }
    } , [nowKey ] )
    return (
        <div   ref={trackRef} className={className ? [cl.track , className].join(' ') : cl.track}>
            <div style={{width : GreyWidth, transform : myTransform}} className={cl.greyBlock}></div>
            {MyValues}
        </div>
    );
};

export default FullPicker;