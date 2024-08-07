import React from 'react'
// import Section1 from './Section_Components/HomeSec1'

import ServiceSec from './Section_Components/ServiceSec'
import HeroSec from './Section_Components/HeroSec'

import Stats from './Section_Components/Stats'
import Team from './Section_Components/Team'
import Project from './Section_Components/PortFolio'
import CTA from './Section_Components/CTA'

export default function Home() {
  return (
    <>
  <div >
  <HeroSec/>

    <ServiceSec/>
    <Project/>
    <Stats/>
    <CTA/>
    <Team/>

    </div>




    </>
  )
}
