import React, { useState } from 'react'
import { Checkout } from '../checkout/Checkout';
import { Course } from '../helpers/models';

import Popup from './Popup';

const CourseCard: React.FC<Course> = (course) => {
    const {product} = course;
    const amount = product.amount.toString()
    const [popupToggle, setPopupToggle] = useState(false);
    
    const handleClick = () => {
        setPopupToggle(!popupToggle);
    }

  return (
      <>
        {popupToggle && <Popup>
                            <Checkout product={product} setToggle={setPopupToggle}/>
                        </Popup> 
        }

        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture card__picture--${course.id}`}>
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span--${course.id}`}>{product.name}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            {course.details.map(detail => <li>{detail}</li>)}
                        </ul>
                    </div>
                </div>
                <div className={`card__side card__side--back card__side--back-${course.id}`}>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">${amount.substring(0, amount.length - 2)}</p>
                        </div>
                        <a href="#popup" className="btn btn--white" onClick={() => handleClick()}>Buy now!</a>
                    </div>
                </div>
            </div>
        </div>
        
      </>    
  )
}

export default CourseCard
