import React from 'react';
import ContentLoader from "react-content-loader"

const PizzaPreLoader=()=>{
    return(<ContentLoader 
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="150" cy="148" r="140" /> 
    <rect x="15" y="297" rx="0" ry="0" width="280" height="24" /> 
    <rect x="15" y="336" rx="3" ry="3" width="280" height="83" /> 
    <rect x="15" y="451" rx="0" ry="0" width="101" height="28" /> 
    <rect x="152" y="441" rx="20" ry="20" width="141" height="39" />
  </ContentLoader>)
    
}


export default PizzaPreLoader