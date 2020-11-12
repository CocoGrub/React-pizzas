import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Sort,Categories,PizzaBlock} from '../components/index'
import PizzaPreLoader from '../components/pizzaBlock/PizzaPreLoader'
import {setCategory,SetSortBy} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import {addPizzaToCartAC} from '../redux/actions/cart'
const pizzaTypes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortTypes = [
                  {name:'Популярности',type:'popular',order:'desc'},  
                  {name:'Цене',type:'price',order:'desc'},
                  {name:'Aлфавиту',type:'name',order:'asc'},]

  const Home = () => {
  const  items  = useSelector((state) => state.pizzas.items)
  const  isLoaded  = useSelector((state) => state.pizzas.isLoaded)
  const  {category,sortBy}  = useSelector((state) => state.filters)
  const  cartItems  = useSelector((state) => state.cart)
  console.log(cartItems);

  const dispatch=useDispatch()
  
  const onSelectCategory = React.useCallback((index)=>{
    dispatch(setCategory(index))},[])

  const onSelectSortType = React.useCallback((type)=>{
    dispatch(SetSortBy(type))},[])
    
  const addPizzaToCart=(obj)=>{
  dispatch(addPizzaToCartAC(obj))
  }
    

  React.useEffect(() => {
    dispatch(fetchPizzas(category,sortBy));
  }, [category,sortBy]); //category меняется при изменении фильтра, юзЕффект срабатывает при первом ренедере и при изменении категории
  
    
  // const onSelectCategory=(index)=>{
  //   dispatch(setCategory(index))
  // }

  return (
        <div className="container">
        <div className="content__top">
          <Categories
          activeCategory={category}
          onClicked={onSelectCategory}
          data={pizzaTypes}/>
          <Sort activeSortType={sortBy} data={sortTypes} onClickSortType={onSelectSortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded?items.map((item,index)=>{
            return  <PizzaBlock key={item.name+index}
            cartItemCount={cartItems.items[index]}
            onClickAddPizza={(item)=>addPizzaToCart(item)}
            //  isLoading={true}
            isLoading
             {...item}  />
          }):Array(12).fill(0).map((_,index)=><PizzaPreLoader key={index}/>)}
        </div>
      </div>
  )
}

export default Home
