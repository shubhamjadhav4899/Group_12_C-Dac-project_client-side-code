import React from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { ChildreMedicine } from '../../../../Data/ChildrenMedicine'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>

      <div className='space-y-10 py-2 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={ChildreMedicine} sectionName={"children Tablets"}/>
        <HomeSectionCarousel data={ChildreMedicine} sectionName={"children serups"}/>
        <HomeSectionCarousel data={ChildreMedicine} sectionName={"Adult's Tablets"}/>
        <HomeSectionCarousel data={ChildreMedicine} sectionName={"Adult's serups"}/>
      </div>
    </div>
  )
}

export default HomePage
