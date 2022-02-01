import React from 'react'
import { Product } from '../helpers/models'

const Card: React.FC<Product> = (product) => {
  return (
    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--fromt">
                <div className={`card__picture card__picture--${product.id}`}>
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading card__heading-span--${product.id}`}>{product.name}</span>
                </h4>
                <div className="card__details">
                    <ul>
                        {product.details.map(detail => <li>detail</li>)}
                    </ul>
                </div>
            </div>
            <div className={`card__side card__side--back card__side--back${product.id}`}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">${product.amount}</p>
                    </div>
                    <a href="#" className="btn btn--white">Buy now!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
