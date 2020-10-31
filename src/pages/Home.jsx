import React from 'react'
import {Sort,Categories,PizzaBlock} from '../components/index'

const Home = ({items}) => {
  console.log(items);
    return (
        <div className="container">
        <div className="content__top">
          <Categories
            data={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <Sort data={['Популярности', 'Цене', 'Aлфавиту']} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((item,index)=>{
            return  <PizzaBlock key={item.name+index} {...item} />
          })}
        </div>
      </div>
    
    )
}

export default Home
