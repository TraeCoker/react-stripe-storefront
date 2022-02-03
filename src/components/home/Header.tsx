import React from 'react'
import { HeaderData } from '../helpers/models'

const Header: React.FC<HeaderData> = ({mainHeading, subHeading, image, buttonText}) => {

  return (
    <header className="header">
        <div className="header__logo-box">
            <img src={image} alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--sub">{subHeading}</span>
                <span className="heading-primary--main">{mainHeading}</span>
            </h1>

            <a href="#section-courses" className="btn btn--white btn--animated">{buttonText}</a>
        </div>
    </header>
  )
}

export default Header
