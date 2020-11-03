import React from 'react'


const Categories = React.memo(({data,onClicked}) => {
    const [current,setCurrent] = React.useState(null)
     
     console.log('categories');
       const clicked=(index)=>{
           setCurrent(index)
           onClicked(index)
       }
   
       return (
               <div className="categories">
                   <ul>
                       <li className={current===null?'active':''} onClick={()=>clicked(null)}>Все</li>
                     {data && data.map((name,index)=>{
                         return <li className={current===index?'active':''} onClick={()=>clicked(index)} key={name+index}>{name}</li>
                     })}
                   </ul>
                 </div>
       )
   })

export default Categories
