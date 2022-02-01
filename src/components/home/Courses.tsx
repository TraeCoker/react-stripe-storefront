import React from 'react'
import { courses } from '../helpers/models'
import CourseCard from './CourseCard'

const Courses: React.FC = () => {
  return (
    <section className="sections-courses" id="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
              Most popular courses
          </h2>
        </div>

        <div className="row">
            {courses.map(course => <CourseCard {...course} />)}
        </div>
    </section>
      
    
  )
}

export default Courses
