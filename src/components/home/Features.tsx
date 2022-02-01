import React from 'react'
import FeatureBox from './FeatureBox'
import { features } from '../helpers/models'


const Features: React.FC = () => {
  return (
    <div>
      {features.map(feature => <FeatureBox {...feature}/>)}
    </div>
  )
}

export default Features
