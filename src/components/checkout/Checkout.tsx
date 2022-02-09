import React, { useState } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { useStripe } from '@stripe/react-stripe-js';
import { Product } from '../helpers/models';

// interface CheckoutProduct {
//   name: string,
//   description: string,
//   images: string[],
//   amount: number,
//   currency: string,
//   quantity: number,
// }

interface Props {
  product: Product;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkout: React.FC<Props>= ({product, setToggle}) => {
  const stripe = useStripe();
  const amount = product.amount.toString()

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const body = { line_items: [product] }
    const { id: sessionId } = await fetchFromAPI('checkouts',{
      body
    });

    const { error } = await stripe!.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  }


  return ( 
    <>
      <div className="popup__left">
        <img src={product.images[0]} alt="Course photo" className="popup__img" />
        <img src={product.images[1]} alt="Course photo" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close" onClick={() => setToggle(false)}>&times;</a>
        <h2 className="heading__secondary u-margin-bottom-small">{product.name}</h2>
        <h3 className="heading__tertiary">${amount.substring(0, amount.length - 2)}</h3>
        <p className="popup__text">{product.description}</p>
        <p className="popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique. Rhoncus urna neque viverra justo. </p>
        <button
        onClick={handleClick}
        className="btn btn--secondary">
        Start Checkout
        </button>
      </div>
        
  
      
    </>
  )
};
