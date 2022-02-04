import React, { SyntheticEvent } from 'react'
import { HeaderData } from '../helpers/models'

const Header: React.FC<HeaderData> = ({mainHeading, subHeading, page, buttonText}) => {

  return (
    <header className={`header header-${page}`} id="top">
        <div className="header__logo-box">
              <img src="/img/logo-white-2-small.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--sub">{subHeading}</span>
                <span className="heading-primary--main">{mainHeading}</span>
            </h1>

            {buttonText && <a href="#section-courses" className="btn btn--white btn--animated">{buttonText}</a>}
        </div>
    </header>
  )
}

export default Header
