import React from 'react';
import { classNames } from '../../helpers/common.helpers';


class GoldButton extends React.Component {

  render(){
    return (
        <a 
          href={this.props.href} 
          onClick={this.props.onClick} 
          target={this.props.target ? this.props.target : '_self'}
          className={classNames(
            this.props.className,
            'text-center px-8 md:px-10 pt-3 pb-3 cursor-pointer inline-block bg-yellow-gold/20 hover:bg-yellow-gold/5 rounded-xl uppercase text-white text-xs tracking-widest gradient-border'
          )}
          >{this.props.text}</a>
         );
  }
}

export default GoldButton;