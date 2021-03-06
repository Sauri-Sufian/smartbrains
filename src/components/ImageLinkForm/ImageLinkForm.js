import React from 'react'
import './imagelinkform.css'
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
   /*  console.log(OnInputChange,'link') */
    return (
        <div>
            <p className='f3'>
                {'Give an url and detect the face '}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-5'>
                <input className="f4 pa2 w-70 center" 
                    type='tex'
                    onChange={onInputChange}
                    />
                <button className='ba bw0 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
                >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;