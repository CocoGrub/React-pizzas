import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import Button from '../Button'


function PizzaBlock({id,name,imageUrl,price,types,sizes,onClickAddPizza,cartItemCount}) {
  

    const [activeType,setActiveType]=useState(types[0])
    const [activeSize,setActiveSize]=useState(sizes[0])
    
    const availableTypes = ['тонкое','традиционное'] //все равно рендерим массив, вне зависимости от наличия в types такого теста
    const availableSizes = [26,30,40]

    const changeActiveType=(index)=>{
      setActiveType(index)
    }
    const changeActiveSize=(index)=>{
      setActiveSize(index)
    }
    const typeString = availableTypes[activeType]

    const onAddPizza=()=>{
      onClickAddPizza({id,name,price,typeString,activeSize,imageUrl})
      
    }
    return (
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {availableTypes.map((type,index)=><li key={type+index}
             className={classNames({
              active:activeType===index,
              disabled:!types.includes(index)})}//если в типах пиццы нет типа пиццы из avaibleTypes, то ставим disabled 
              onClick={()=>{changeActiveType(index)}}>{type}</li>)}
            
          </ul>
          <ul>
            {availableSizes.map((size,index)=><li key={size+index}
             onClick={()=>changeActiveSize(size)}
             className={classNames({
              active:activeSize===size,
              disabled:!sizes.includes(size)
            })}>
              {size} см.
            </li>)}
          
          </ul>
        </div> 
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          {/* <div className="button button--outline button--add"> */}
          <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {cartItemCount>0?<i>{cartItemCount}</i>:null}
        </Button>
        </div>
      </div>

    )
}

PizzaBlock.propTypes={
id:PropTypes.number.isRequired,
name:PropTypes.string.isRequired,
imageUrl:PropTypes.string.isRequired,
price:PropTypes.number.isRequired,
types:PropTypes.arrayOf(PropTypes.number).isRequired,
sizes:PropTypes.arrayOf(PropTypes.number).isRequired,
onClickAddPizza:PropTypes.func.isRequired,
cartItemCount:PropTypes.number.isRequired,

}

PizzaBlock.defaultProps={
  types:[],

}
export default PizzaBlock
