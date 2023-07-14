import React from 'react';
import GoldButton from '../../components/GoldButton';
import "./styles.css";


class Side extends React.Component {

  render(){


    return (
        <div className="relative h-full w-full">
        <img
          src={this.props.image}
          alt={this.props.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 text-center md:w-2/4">
            <h1
              className="text-white mb-8 text-3xl md:text-2xl lg:text-4xl font-normal slide-title"
              dangerouslySetInnerHTML={{__html: this.props.title}}
            >
            </h1>
            <p
              className="slide-text text-white font-extralight max-w-xs text-center m-auto"
            >
              {this.props.body}
            </p>
            <div className="flex justify-center gap-2">
              <GoldButton href={this.props.link} text={this.props.linkText} className='mt-16' />
            </div>
          </div>
        </div>
      </div>      
       );
  }
}

export default Side;