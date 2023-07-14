import React from 'react';
import tastemaker from '../../assets/images/carousel/ultimate-tastemakers.png';
import balance from '../../assets/images/carousel/ultimate-balance.png';
import journeys from '../../assets/images/carousel/ultimate-journeys.png';
import delights from '../../assets/images/carousel/ultimate-delights.png';
import moments from '../../assets/images/carousel/ultimate-moments.png';
import dedication from '../../assets/images/carousel/ultimate-dedication.png';
import './styles.css';


class CarouselPanel extends React.Component {

  render(){

    let imageurl = tastemaker;
    switch (this.props.privilege) {
        case 'balance':
            imageurl = balance;
            break;
        case 'journeys':
            imageurl = journeys;
            break;
        case 'dedication':
            imageurl = dedication;
            break;
        case 'delights':
            imageurl = delights;
            break;
        case 'moments':
            imageurl = moments;
            break;
        case 'tastemaker':
            imageurl = tastemaker;
            break;
        default:
            imageurl = tastemaker;
            break;
    }
    

    return (
        <a 
            href={this.props.link}            
            style={{ '--image-url': `url(${imageurl})` }}
            className={`inline-block rounded-xl bg-[image:var(--image-url)] bg-no-repeat bg-left-top panelHolder bg-black/30  shadow-lg hover:shadow-gold/50 transition duration-300 ease-in-out hover:scale-105`}            
            >
            <div className="flex justify-center items-center h-full">
                <div className='text-center'>
                    <h5 className="text-2xl text-white opacity-80 font-light tracking-custom leading-8 smallerTitle">{this.props.title}</h5>
                    <h5 className="text-2xl text-white opacity-80 font-light tracking-custom leading-8 smallerTitle">{this.props.subLine}</h5>
                </div>
            </div>
        </a>      
       );
  }
}

export default CarouselPanel;