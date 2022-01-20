import React, { useState } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
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

      <button
        onClick={handleClick}
        disabled={product.quantity < 1}>
        Start Checkout
      </button>
    </>
  )
};
