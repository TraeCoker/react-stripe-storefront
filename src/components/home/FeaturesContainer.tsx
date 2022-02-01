import React from 'react'
import FeatureBox from './FeatureBox'
import { features } from '../helpers/models'


const FeaturesContainer: React.FC = () => {

  return (
      <section className="section-features">
        <div className="row">
            {features.map(feature => <FeatureBox {...feature}/>)}
        </div>
      </section>
  )
  
}

export default FeaturesContainer
