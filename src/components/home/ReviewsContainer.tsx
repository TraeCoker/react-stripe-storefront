import React from 'react'
import { reviews } from '../helpers/models'
import Review from './Review'

const ReviewsContainer: React.FC = () => {
  return (
    <section className="section-reviews">
        <div className="bg-video">
            <video  className="big-video__content" autoPlay muted loop>
              <source src="img/bg-video-1.mp4" type="video/mp4"/>
            </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                We are transforming lives on the daily
            </h2>
        </div>

        <div className="row">
            {reviews.map(review => <Review {...review}/>)}
        </div>
    </section>
  )
}

export default ReviewsContainer
