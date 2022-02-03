import React from 'react'
import { Checkout } from '../checkout/Checkout'
import { Product } from '../helpers/models'

interface Props {
    product: Product;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<Props>= ({product, setToggle}) => {

  return (
    <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">

            </div>

            <div className="popup__right">
                <a href="#section-courses" className="popup__close" 
                   onClick={() => setToggle(false)}>&times;</a>
                {product && <Checkout product={product}/>}
            </div>
            
        </div>
    </div>
  )
}

export default Popup
