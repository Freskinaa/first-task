import React from 'react'
import Card from '../Card/Card'
import "./cardlist.scss";

export const CardList = (props) => {
  return (
    <div className='cards-wrapper'>
        {props.data.map((item) =>  (
            <Card key={item.id} card={ item}/>
        ))}
    </div>
  )
}
