import React, { useState } from 'react';
import Video from "../Video";
import GoldButton from '../../components/GoldButton';
import muteButton from '../../assets/images/button_mute.svg';
import unmuteButton from '../../assets/images/button_unmute.svg';
import header_video from '../../assets/video/Ultima_Product_MC_noloop_16x9_H.264.mp4';
import mobile_video from '../../assets/video/Ultima_Product_MC_noloop_9x16_H.264.mp4';
import header_video_ogv from '../../assets/video/Ultima_Product_MC_noloop_16x9_OGV.ogv';
import mobile_video_ogv from '../../assets/video/Ultima_Product_MC_noloop_9x16_OGV.ogv';
import { classNames } from '../../helpers/common.helpers';
import './styles.css';


function Header({
  type = 'image',
  imagePos = 'bg-left-top',
  imageUrl,
  title, 
  subTitle, 
  preTitle, 
  }) { 

  const [finished, setFinished] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoFinished = () => (setFinished(1));
  const handleToggleMuted = () => {
    setMuted(!muted)
  }

  let videoUrl = header_video;
  let videoUrlOgv = header_video_ogv;
  let videoMobileUrl = mobile_video;
  let videoMobileUrlOgv = mobile_video_ogv;

  if(window.journey === 'visa') {
    videoUrl = header_video;
    videoUrlOgv = header_video_ogv;
    videoMobileUrl = mobile_video;
    videoMobileUrlOgv = mobile_video_ogv;  
  }

  return (
    <div>
    {type === 'image' && (
        <div
          style={{ '--image-url': `url(${imageUrl})` }}
          className={classNames(
            imagePos,
            `w-screen h-screen inline-block bg-[image:var(--image-url)] bg-no-repeat bg-cover`
            )}          
        >
          <div className='z-10 absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 text-center'>
            {preTitle && (<div className=' text-base font-extralight text-white uppercase' dangerouslySetInnerHTML={{__html: preTitle}}></div>)}
            <h1 className="text-white header-title" dangerouslySetInnerHTML={{__html: title}}></h1>
            <h3 className="text-white text-base font-light mt-8"  dangerouslySetInnerHTML={{__html: subTitle}}></h3>
          </div>          
        </div>          
    )}
    {type === 'footerimage' && (
        <div
          style={{ '--image-url': `url(${imageUrl})` }}
          className={`w-screen terms-header inline-block bg-[image:var(--image-url)] bg-no-repeat bg-bottom`}   
        >
          <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className="text-white header-title gradient-title-text" dangerouslySetInnerHTML={{__html: title}}></h1>
            <h3 className="text-white text-md font-light mt-8"  dangerouslySetInnerHTML={{__html: subTitle}}></h3>
          </div>          
        </div>          
    )}
    {type === 'video' && (
      <div className='pb-20 relative'>
        <div className="z-10 absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">                    
          <GoldButton href='#/luxuries' text='Explore Privileges' className={classNames(
          finished===0 ? 'invisible' : 'visible',
          "mb-4" 
          )}  />         
          <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => handleToggleMuted()} >
            {muted ? <img src={unmuteButton} alt='Unmute' /> : <img src={muteButton} alt='Mute' />}
          </button>
        </div>   
        <div className='hidden md:inline-block'>          
          <Video videoUrl={videoUrl} videoUrl2={videoUrlOgv}  muted={muted} autoPlay={true} onEnded={videoFinished}/> 
        </div>               
        <div className='md:hidden'>
          <Video videoUrl={videoMobileUrl} videoUrl2={videoMobileUrlOgv}  muted={muted} autoPlay={true} onEnded={videoFinished} /> 
        </div>
      </div>          
    )}  
    </div> 
  );
};

  

export default Header;
