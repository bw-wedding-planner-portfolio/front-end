import React from 'react';
import '../App.css';

const WeddingCard = props => {
  return (
    <div className='card-container'>
      <div className='wedding-card'>
        <div className='wedding-card-front'>
          <img src={props.image} alt='wedding-img' />
          <div className='description'>
            <p>{props.location}</p>
          </div>
        </div>
        <div className='wedding-card-back'>
          <div className='text-container'>
            <p>Theme: {props.theme}</p>
            <p>Description: {props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
