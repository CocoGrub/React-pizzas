import React from 'react'
import {useSelector} from 'react-redux'
import {Sort,Categories,PizzaBlock} from '../components/index'

const Home = () => {
  const { items } = useSelector((state) => ({
    items: state.pizzas.items,
    sortBy: state.filters.sortBy,
  }));
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
