/*  import React from "react";

const Output = ({expression})=>{
    return(
        <div className="Output">
        {expression};
        </div>
    )
}
export default Output;   */

export const Output = ({value, className}) => {
    const myClass = `${className} text-center`
    return (<h2 className={myClass}>Output : {value}</h2>)
}