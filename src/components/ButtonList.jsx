import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = ["All","Music","Gaming","Movies","Live","Cricket","News","Live songs","Lo-fi","Ai","Trending","Comedy","jioCinema","Horror","Pop"]
  return (
    <div className='flex   gap-2 p-3'>
      {List.map((name)=>{
        return <Button key={name} name={name}/>
      })}
    </div>
  )
}

export default ButtonList