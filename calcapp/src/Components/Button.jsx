/*export const Button = ({label, classname})=>{
    const clicked = ()=>{

    }
    return(<button onClick = {clicked} className = {classname}>1</button>)
}*/
/*import React from "react";
const Button = ({label, classname})=>{
    const clicked = ()=>{ 

    }
    return(<button onClick = {clicked} className = {classname}>1</button>)
}

export default Button; */

export const Button = ({op, calculate, className}) => {
    const clicked = () => {
        calculate(op);
        console.log("Clicked ", op);
    }

    const myClass = `${className} text-center m-2`
    return (
        <button onClick={clicked} className={myClass}>{op}</button>
    )
}
