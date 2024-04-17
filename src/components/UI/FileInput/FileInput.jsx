import React, { useState } from 'react';
import cl from './FileInput.module.css'
import file  from '../../../images/icons/file.svg'
import trash from '../../../images/icons/trash.svg'
const FileInput = ({className}) => {
    const [images , setImages] = useState([])
    const [counter , setCounter] = useState(0)
    const [files , setFiles] = useState([])
    const [haveImages , setHaveImages] = useState(false)
    return (


            <div style={images.length === 0 ? {display:'flex'} : {} } className={className ? [  cl.FileInput, className].join(' ') : cl.FileInput }>
                                {images.map( (e) => {
                    return(
                        <div className={cl.imageFeetContainer}>

                            <div  onClick={() => {
                                setFiles([...files].filter(obj => {
                                    return (files.indexOf(obj) !== images.indexOf(e)) }  ))
                                setImages([...images].filter((m) => m!=e)) 
                                }}   className={[cl.removeIcon , '_icon-trash'].join(' ')} />
                                
                            <img   className={cl.imageFeet} src = {e}  alt="" />
                        </div>
                    )

                }
                )}
            <label style={images.length === 5 ? {display : 'none'} : {}} className={images.length !== 0 ? cl.ActiveMainLabel : cl.MainLabel} htmlFor="file">
                    <input onChange={(event) => {
                            if (event.target.files && event.target.files[0]) {
                                setFiles([...files , event.target.files[0]])
                                setImages([...images , URL.createObjectURL(event.target.files[0])]);
        }

                        }} type="file"  id="file"  accept="image/*" class= {cl.none}/>



                <div className={cl.fileImageContainer}>
                    <img className={cl.fileImage} src={file} alt="" />
                </div>
                <p>Добавить фото</p>
            </label>
            </div>

    );
};

export default FileInput;