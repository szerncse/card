import React from 'react'

function Title({작명,서브}) {
  return (
    <>
    <div className="w-1/"></div>

    <h3 className='font-bold text-center text-base
     md:text-lg  lg:text-3xl mt-24'>{작명} 타이틀</h3>
     <p className='text-center mb-24' >{서브} Lorem ipsum dolor sit amet </p>
    </>
  )
}

export default Title