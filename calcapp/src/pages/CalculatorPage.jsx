/*
import React, {useState} from 'react';
import Button from './Button';
import Output from './Output';

const CalculatorPage = ()=>{
    const [expression, setexpression] = useState("");
    const handleButtonClick = (value)=>{
        if(value === '='){
            try{ 
                const result = eval(expression);
                setExpression(result);  
            }
            catch(error){
                setExpression(error);
            }
        }
            else{
                setExpression(expression+value);
            }
    };

    const Buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+',];

    return(
        <div className='Calculator'>
            <Output expression = {expression}/>
            <div className='Buttons'>
             {Buttons.map(Label =>(
                <Button key={Label} label = {Label} onClick  = {handleButtonClick}/>

             ))}   
            </div>

        </div>
    )

}

*/

import { useState } from "react"
import { Button } from "../Components/Button"
import { Output } from "../Components/Output"

export const CalculatorPage = () => {

    const [answer, setOuput] = useState("");

    const calculate = (op) => {
        // switch (op) {
        //     case '+': {
                
        //         break;
        //     }
        //     case '-': {
        //         setOuput(op);
        //         break;
        //     }
        //     case '*': {
        //         setOuput(op);
        //         break;
        //     }
        //     case '/': {
        //         setOuput(op);
        //         break;
        //     }
        //     default: {
        //         setOuput(op)
        //         break;
        //     }
        // }

        if (op === '=') {
            setOuput(eval(expression));
        }
        else if (op === 'AC'){
            setOuput("");
        }
        else {
            setOuput(answer + op)
        }
    }
        
    const expression = answer;
    console.log("Expression :", expression);

    return (
        <>
        <Output className="alert alert-success" value={answer}/>
        <br/>
        <Button className="gap-2 btn btn-info" calculate={calculate} op="("/>
        <Button className="btn  btn-info" calculate={calculate} op=")"/>
        <Button className="btn btn-info" calculate={calculate} op="%"/>
        <Button className="btn btn-info" calculate={calculate} op="AC"/>
        <br/>
        <Button className="btn btn-dark" calculate={calculate} op="7"/>
        <Button className="btn btn-dark" calculate={calculate} op="8"/>
        <Button className="btn btn-dark" calculate={calculate} op="9"/>
        <Button className="btn btn-secondary" calculate={calculate} op="/"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="4"/>
        <Button className="btn btn-secondary" calculate={calculate} op="5"/>
        <Button className="btn btn-secondary" calculate={calculate} op="6"/>
        <Button className="btn btn-info" calculate={calculate} op="*"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="1"/>
        <Button className="btn btn-secondary" calculate={calculate} op="2"/>
        <Button className="btn btn-secondary" calculate={calculate} op="3"/>
        <Button className="btn btn-info" calculate={calculate} op="-"/>
        <br/>
        <Button className="btn btn-secondary" calculate={calculate} op="0"/>
        <Button className="btn btn-secondary" calculate={calculate} op="."/>
        <Button className="btn btn-success" calculate={calculate} op="="/>
        <Button className="btn btn-info" calculate={calculate} op="+"/>
        </>
    )
}
