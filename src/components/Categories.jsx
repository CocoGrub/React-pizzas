import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({data,onClicked,activeCategory}) => {
       return (
               <div className="categories">
                   <ul>
                       <li className={activeCategory===null?'active':''} onClick={()=>onClicked(null)}>Все</li>
                     {data && data.map((name,index)=>{
                         return <li className={activeCategory===index?'active':''} onClick={()=>onClicked(index)} key={name+index}>{name}</li>
                     })}
                   </ul>
                 </div>
       )
   })

Categories.propTypes={
  data:PropTypes.arrayOf(PropTypes.object).isRequired,
  onClicked:PropTypes.func.isRequired,
  activeCategory:PropTypes.number.isRequired
}

Categories.defaultProps={
  data:[],
  activeCategory:null
}

export default Categories
