import React from 'react';
import loadingSvg from './ellipse-loader.svg';
import './styles.css';

class Loading extends React.Component {

  render(){
    return (
        <div className='bg-black h-screen w-screen flex justify-center items-center'>
            <img className='loading-svg' src={loadingSvg} alt='loading'/>                
        </div>
    )
  }
}

export default Loading;