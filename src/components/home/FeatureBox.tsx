import React from 'react'
import { MdRamenDining, MdSelfImprovement, MdOutlineGroups, MdOutlineMood } from "react-icons/md";
interface Props {
    icon: number;
    heading: string;
    text: string;
}

const FeatureBox: React.FC<Props>= ({icon, heading, text}) => {
  return (
    <div className="col-1-of-4">
        <div className="feature-box">
            <i className="feature-box__icon">
                {icon === 1 && <MdSelfImprovement />}
                {icon === 2 && <MdOutlineGroups/> }
                {icon === 3 && <MdRamenDining />}
                {icon === 4 && <MdOutlineMood />}
            </i>
            <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
            <p className="feature-box__text">
                {text}
            </p>
        </div>
    </div>
  )
}

export default FeatureBox
