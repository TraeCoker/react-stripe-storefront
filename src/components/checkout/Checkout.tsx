import React, { useState } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { useStripe } from '@stripe/react-stripe-js';
import { Product } from '../helpers/models';

interface CheckoutProduct {
  name: string,
  description: string,
  images: string[],
  amount: number,
  currency: string,
  quantity: number,
}


interface Props {
  product: Product;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

// interface Props {
//   product: CheckoutProduct;
// }

export const Checkout: React.FC<Props>= ({product, setToggle}) => {
  const stripe = useStripe();
  console.log(typeof product);
  console.log(product.name)

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
      <div className='popup__text'>
        <h3>{product.name}</h3>
        <h4>{product.amount}</h4>
        <p>{product.description}</p>

      </div>

      <hr />

      <button
        onClick={handleClick}
        disabled={product.quantity < 1}>
        Start Checkout
      </button>
    </>
  )
};
