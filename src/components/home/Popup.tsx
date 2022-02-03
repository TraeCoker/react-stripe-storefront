import React, { Children, ReactChild } from 'react'
import { Checkout } from '../checkout/Checkout'
import { Product } from '../helpers/models'

// interface Props {
//     product: Product;
//     setToggle: React.Dispatch<React.SetStateAction<boolean>>;
// }

// interface Props {
//     children: React.ReactChild;
// }

const Popup: React.FC= ({children}) => {

  return (
    <div className="popup" id="popup">
        <div className="popup__content">
            {children}
        </div>
    </div>
  )
}

export default Popup
