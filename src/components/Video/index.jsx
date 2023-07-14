import React from 'react';

class Video extends React.Component {

  render(){
    return (
        <video className="video w-screen  object-cover" preload='auto' playsInline autoPlay={this.props.autoPlay} muted={this.props.muted} onEnded={() => this.props.onEnded()}>
          <source src={this.props.videoUrl}  type='video/mp4' />
          <source src={this.props.videoUrl2}  type='video/ogg' />          
        </video>
       );
  }
}

export default Video;