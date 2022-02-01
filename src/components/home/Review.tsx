import React from 'react'
import { Review, Review } from '../helpers/models'

const Review: React.FC<Review> = ({name, imageURL, heading, text}) => {
  return (
    <div className="story">
        <figure className="story__shape">
            <img src={imageURL} alt="picture of a smiling reviewer" className="story__img" />
            <figcaption className='story__caption'>{name}</figcaption>
        </figure>
        <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default Review
