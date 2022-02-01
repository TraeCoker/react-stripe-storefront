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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique. Rhoncus urna neque viverra justo. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim. Sit amet nisl purus in. Neque viverra justo nec ultrices dui. Lorem ipsum dolor sit amet consectetur. Dolor sed viverra ipsum nunc aliquet bibendum enim. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Etiam erat velit scelerisque in dictum non. Mi proin sed libero enim sed faucibus turpis in. Elementum tempus egestas sed sed. Fringilla phasellus faucibus scelerisque eleifend donec. Imperdiet massa tincidunt nunc pulvinar. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">World class instruction and programs</h3>
                <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Ut pharetra sit amet aliquam id diam. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Amet consectetur adipiscing elit duis tristique sollicitudin. Ultrices sagittis orci a scelerisque purus semper eget.
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
