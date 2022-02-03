import React from 'react'
import { Product } from '../helpers/models'

const Popup: React.FC<Product>= (product) => {

  return (
    <div className="popup" id="popup">
        <div className="popup__content">
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
        </div>
    </div>
  )
}

export default Popup
