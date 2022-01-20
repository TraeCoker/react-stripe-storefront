import React from 'react';
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

  const [product, setProduct] = useState<Product | {}>({
      name: 'Apple',
      description: 'A nice juicy delight',
      images: [
        'https://www.goodfruit.com/wp-content/uploads/Snapdragon-single.jpg'
      ],
      amount: 499,
      currency: 'usd',
      quantity: 0,  
  });

  return ( 
    <div>

    </div>
  )
};
