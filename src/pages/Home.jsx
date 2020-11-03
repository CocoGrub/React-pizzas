import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Sort,Categories,PizzaBlock} from '../components/index'
import {setCategory} from '../redux/actions/filters'
const pizzaTypes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortTypes = [
                  {name:'Популярности',type:'popular'},  
                  {name:'Цене',type:'price'},
                  {name:'Aлфавиту',type:'alphabet'},]
const Home = () => {
  const { items } = useSelector((state) => ({
    items: state.pizzas.items,
    sortBy: state.filters.sortBy,
  }));

  const dispatch=useDispatch()
  
  const onSelectCategory = React.useCallback((index)=>{
    dispatch(setCategory(index))},[])

  // const onSelectCategory=(index)=>{
  //   dispatch(setCategory(index))
  // }

  return (
        <div className="container">
        <div className="content__top">
          <Categories
          onClicked={onSelectCategory}
            data={pizzaTypes}
          />
          <Sort data={sortTypes} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((item,index)=>{
            return  <PizzaBlock key={item.name+index} {...item}  />
          })}
        </div>
      </div>
    
    )
}

export default Home
