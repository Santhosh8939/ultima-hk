import {React, useState} from 'react';
import { useTranslation} from 'react-i18next';
import ReactPlayer from 'react-player/lazy';
import playButton from '../../assets/images/button_play.svg';
import pauseButton from '../../assets/images/button_pause.svg';
import muteButton from '../../assets/images/button_mute.svg';
import unmuteButton from '../../assets/images/button_unmute.svg';
import line from '../../assets/images/sectionLine.svg';
import { classNames } from '../../helpers/common.helpers';
import imageUrl from '../../assets/images/video-paused-bg.jpg';

function BrandVideo({
  isMobile = false,
}) { 
  
    const { t } = useTranslation();
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);    
    let videoUrl = t('home.brandVideo');
    if(isMobile){
      videoUrl = t('home.brandVideoMobile');
    }

    const handlePause = () => {
        setPlaying(false);
    }

    const handlePlay = () => {    
        setPlaying(true);
    }

    const handlePlayPause = () => {
        setPlaying(!playing);
    }

    const handleToggleMuted = () => {
        setMuted(!muted)
    }

    if(window.journey === 'visa') {
      if(isMobile){
        videoUrl = t('home.brandVideoVisa');
      }else{
        videoUrl = t('home.brandVideoVisaMobile');
      }      
    }
  
    return (
      <>
      <div className='player-wrapper'>
          <ReactPlayer 
              className='react-player'
              url={videoUrl}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')} 
              controls={false} 
              onPlay={handlePlay}
              onPause={handlePause}
              playing={playing}
              width='100%' 
              height='100%'
              volume={0.8}
              muted={muted}
              loop={true}
              config={{
                  youtube: {
                      playerVars: { 
                          controls: 0, 
                          autoplay: 0,
                          modestbranding: 1,
                          loop: 1,
                          showinfo: 1,
                          rel: 0
                      }
                  },
                }}
          />
          <div
            style={{ '--image-url': `url(${imageUrl})` }}
            className={classNames(
            'justify-center items-center bg-black z-50 absolute -top-1 -left-1 -right-1 -bottom-1 flex bg-[image:var(--image-url)] bg-no-repeat bg-cover',
            playing ? 'hidden' : ''            
          )}>
            <div className=' grid-cols-1 text-center'>
              <div style={{ paddingBottom: '4.5rem'}} className='text-white mt-4 uppercase text-lg tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('brandVideo.pillarTitle')}}></div>
              <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => handlePlayPause()} >
              {playing ? <img src={pauseButton} alt='Pause' /> : <img src={playButton} alt='play' />}            
              </button>            
              <div className='text-white mt-4 uppercase text-lg tracking-widest font-extralight'>Play to discover more</div>            
            </div>
          </div>
      </div>
      <div className='mt-4 flex justify-center'>
        <img src={line} alt='divider' />
      </div>      
      <div className='flex justify-center my-4'>
          <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border mr-4' onClick={() => handlePlayPause()} >
            {playing ? <img src={pauseButton} alt='Pause' /> : <img src={playButton} alt='play' />}
          </button>
          <button className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => handleToggleMuted()} >
            {muted ? <img src={unmuteButton} alt='Unmute' /> : <img src={muteButton} alt='Mute' />}
          </button>
      </div>
      </>
    );
 
}

export default BrandVideo;
