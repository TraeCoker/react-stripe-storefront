import React from 'react'
import Composition from './Composition'

const About: React.FC = () => {
  return (
    <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Empowering all aspects of self and life
            </h2>
        </div>

        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Health is about more than what you eat</h3>
                <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique. Rhoncus urna neque viverra justo. 
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">World class instruction and programs</h3>
                <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Ut pharetra sit amet aliquam id diam. Feugiat in ante metus dictum at tempor commodo ullamcorper a. 
                </p>

                <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
            <div className="col-1-of-2">
                <Composition />
            </div>
        </div>
    </section>
  )
}

export default About
