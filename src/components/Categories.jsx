import React,{useState} from 'react'

const Categories = ({data}) => {
    const [current,setCurrent] = useState(0)
    const clicked=(index)=>{
        setCurrent(index)
    }

    return (
            <div className="categories">
                <ul>
                  {data.map((name,index)=>{
                      return <li className={current===index?'active':''} onClick={()=>clicked(index)} key={name+index}>{name}</li>
                  })}
                </ul>
              </div>
    )
}

export default Categories
