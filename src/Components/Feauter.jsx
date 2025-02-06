import React, { useState } from 'react'
import FeaturesData from '../Constant/FeatureCard'
import FeatureCards from './Allcards/FeatureCards'


const Feauter = () => {
const [featData,setfeatData]=useState(FeaturesData)




  return (
    <div className='Feaature' id='ser'>
      <h1 className='Feaature-headline' > Unlimted Features</h1>
<div className='Allfeature'>
{
 featData.map((Element,index)=>  <FeatureCards  heading={Element.title}  icon={Element.icon}   des={Element.des}/>)
}
</div>

    </div>
    
  )
}

export default Feauter
