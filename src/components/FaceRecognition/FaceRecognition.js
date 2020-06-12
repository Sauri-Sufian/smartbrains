import React from 'react'
import './boundingbox.css'
const FaceRecognition =({box,imageUrl})=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputimage' alt='' src=
            {imageUrl} width='500px' height='auto' />
            <div className='boundingbox' style={{left:box.leftCol,top:box.topRow,right:box.rightCol ,bottom:box.bottomRow}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition





