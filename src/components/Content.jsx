import React from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function Content() {
  return (
    <div className='grid xl:grid-flow-col-dense lg:grid-flow-col-dense md:grid-flow-col-dense xl:grid-cols-9 lg:grid-cols-9 md:grid-cols-9 max-w-[1000px] h-screen mx-auto py-10'>
        <div className='hidden xl:grid xl:col-span-3 lg:grid lg:col-span-3 md:grid md:col-span-3'>
            <LeftBar />
        </div>
        <div className='grid xl:col-span-6 lg:col-span-6 md:col-span-6'>
            <RightBar />
        </div>
    </div>
  )
}

export default Content