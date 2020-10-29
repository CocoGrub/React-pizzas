import React,{useState} from 'react'

const Categories = ({data}) => {
ca    const [current,setCurrent] = useState(null)
    const clicked=(index)=>{
        setCurrent(index)
    }

    return (
            <div className="categories">
                <ul>
                    <li className={current===null?'active':''} onClick={()=>clicked(null)}>Все</li>
                  {data.map((name,index)=>{
                      return <li className={current===index?'active':''} onClick={()=>clicked(index)} key={name+index}>{name}</li>
                  })}
                </ul>
              </div>
    )
}

export default Categories
