import React, { useState } from 'react'
import { Product } from '../helpers/models'
import Popup from './Popup';

const CourseCard: React.FC<Product> = (product) => {
    const amount = product.amount.toString()
    const [popupToggle, setPopupToggle] = useState(false);
    
    const handleClick = () => {
        setPopupToggle(!popupToggle);
    }

  return (
      <>
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture card__picture--${product.id}`}>
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span--${product.id}`}>{product.name}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            {product.details.map(detail => <li>{detail}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={`card__side card__side--back card__side--back-${product.id}`}>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">${amount.substring(0, amount.length - 2)}</p>
                        </div>
                        <a href="#" className="btn btn--white" onClick={() => handleClick()}>Buy now!</a>
                    </div>
                </div>
            </div>
        </div>
        {popupToggle && <Popup />}
      </>    
  )
}

export default CourseCard
