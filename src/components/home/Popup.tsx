import React, { Children, ReactChild } from 'react'
import { Checkout } from '../checkout/Checkout'
import { Product } from '../helpers/models'

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
