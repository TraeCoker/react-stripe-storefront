import React from 'react'
import { courses } from '../helpers/models'
import CourseCard from './CourseCard'

const CoursesContainer: React.FC = () => {
  
  return (
    <section className="section-courses" >
        <div className="u-center-text u-margin-bottom-big" id="section-courses">
          <h2 className="heading-secondary">
              Most popular courses
          </h2>
        </div>

        <div className="row" >
            {courses.map(course => <CourseCard {...course} />)}
        </div>

        <div className="u-center-text u-margin-top-xl">
            <a href="#" className="btn btn--secondary">Subscribe and save on access to all courses</a>
        </div>
    </section>
      
    
  )
}

export default CoursesContainer
