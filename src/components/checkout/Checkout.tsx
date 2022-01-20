import React, { useState } from 'react';
import { fetchFromApi } from '../helpers/helpers';
import { useStripe } from '@stripe/react-stripe-js';

type Product = {
  name: string,
  description: string,
  images: string[],
  amount: number,
  currency: string,
  quantity: number,
}

export const Checkout = (): JSX.Element  => {
  const stripe = useStripe();

  const [product, setProduct] = useState<Product>({
      name: 'Apple',
      description: 'A nice juicy delight',
      images: [
        'https://www.goodfruit.com/wp-content/uploads/Snapdragon-single.jpg'
      ],
      amount: 499,
      currency: 'usd',
      quantity: 0,  
  });

  const changeQuantity = (v: number): void => 
    setProduct({...product, quantity: Math.max(0, product.quantity + v) });

  return ( 
    <>

      <div>
        <h3>{product.name}</h3>
        <h4>Stripe Amount: {product.amount}</h4>

        <img src={product.images[0]} width="250px" alt="product" />

        <button
          onClick={() => changeQuantity(-1)}>
            -
        </button>
        <span>
          {product.quantity}
        </span>
        <button
          onClick={() => changeQuantity(1)}>
            +
        </button>
      </div>

      <hr />
    </>
  )
};
