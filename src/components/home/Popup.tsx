import React from 'react'
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
                <h1>{product.name}</h1>
                <h3>{product.description}</h3>
            </div>
            
        </div>
    </div>
  )
}

export default Popup
