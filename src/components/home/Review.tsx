import React from 'react'
import { ReviewObject } from '../helpers/models'

const Review: React.FC<ReviewObject> = ({name, imageURL, heading, text}) => {
  return (
    <div className="review">
        <figure className="review__shape">
            <img src={imageURL} alt="picture of a smiling reviewer" className="review__img" />
            <figcaption className='review__caption'>{name}</figcaption>
        </figure>
        <div className="review__text">
            <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default Review
