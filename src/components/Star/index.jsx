import React, { useState, useRef, useEffect } from 'react';
import { classNames } from '../../helpers/common.helpers';
import './styles.css';


const Star = () => {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])
    
  const starStyles = useRef({
      position: 'absolute',
      top: Math.floor(Math.random()*screenSize.height),
      left: Math.floor(Math.random()*screenSize.width),     
      transform: 'translate(-50%, -50%)'
  });

  const speed = Math.floor(Math.random()*10);

  const sizeKey = Math.floor((Math.random()*10));
  const twinkleKey = Math.floor(Math.random()*10);
  const colourKey = Math.floor((Math.random()*10 / 5));
  let size = 'sparkle-sml';
  let colour = 'bg-star1';
  let twinkle = 'star-speed-1';

  switch (twinkleKey) {
    case 0:
      twinkle = 'star-speed-0';
      break;
    case 1:
      twinkle = 'star-speed-1';
      break;
    case 2:
      twinkle = 'star-speed-0';
      break; 
    case 3:
      twinkle = 'star-speed-0';
      break;
    case 4:
      twinkle = 'star-speed-0';
      break;
    case 5:
      twinkle = 'star-speed-5';
      break;
    case 6:
      twinkle = 'star-speed-6';
      break;
    case 7:
      twinkle = 'star-speed-7';
      break;
    case 8:
      twinkle = 'star-speed-0';
      break;
    case 9:
      twinkle = 'star-speed-9';
      break;
    case 10:
      twinkle = 'star-speed-0';
      break;
    default:
      twinkle = 'star-speed-1';
      break;
  }


  switch (sizeKey) {
    case 0:
      size = 'sparkle-sml';
      break;
    case 1:
      size = 'sparkle-med';
      break;
    case 2:
      size = 'sparkle-lrg';
      break;  
    case 3:
      size = 'sparkle-sml';
      break;
    case 4:
      size = 'sparkle-sml';
      break;
    case 5:
      size = 'sparkle-sml';
      break;
    case 6:
      size = 'sparkle-sml';
      break;
    case 7:
      size = 'sparkle-sml';
      break;
    case 8:
      size = 'sparkle-sml';
      break;
    case 9:
      size = 'sparkle-sml';
      break;
    case 10:
      size = 'sparkle-sml';
      break;
    default:
      size = 'sparkle-sml';
      break;
  }


  switch (colourKey) {
    case 0:
      colour = 'bg-star1';
      break;
    case 1:
      colour = 'bg-star2';
      break;     
    default:
      colour = 'bg-star1';
      break;
  }

  return (
      <span 
        style={starStyles.current} 
        className={classNames(
          size,
          colour,
          twinkle,
          'sparkle-sml  rounded-full opacity-40 hidden md:inline-block',
        )}
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed={speed}
      ></span>       
      );
}

export default Star;