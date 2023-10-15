import './stylesheet.css';
import {useState} from 'react';
function Calc(){
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleclick = (msg) =>{
        setInput((previnp) => previnp + msg);
    }

    const calculate = () =>{
        try{
            setResult(eval(input));
        }
        catch(error){
            setResult("Error");
        }
    }

    const clear = () =>{
        setInput('');
        setResult('');
    }

    return(
        <div class="main">
            <h1>Calculator</h1>
            <div><input type="text" value={input} readOnly/></div>
            <div class="result">
                <button onClick={clear}>C</button>
                <span>Result: {result}</span>
            </div>
            <div>
                <button onClick={() => handleclick('7')}>7</button>
                <button onClick={() => handleclick('8')}>8</button>
                <button onClick={() => handleclick('9')}>9</button>
                <button onClick={() => handleclick('/')}>/</button>
            </div>
            <div>
                <button onClick={() => handleclick('4')}>4</button>
                <button onClick={() => handleclick('5')}>5</button>
                <button onClick={() => handleclick('6')}>6</button>
                <button onClick={() => handleclick('*')}>x</button>
            </div>
            <div>
                <button onClick={() => handleclick('1')}>1</button>
                <button onClick={() => handleclick('2')}>2</button>
                <button onClick={() => handleclick('3')}>3</button>
                <button onClick={() => handleclick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleclick('0')}>0</button>
                <button onClick={() => handleclick('.')}>.</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => handleclick('+')}>+</button>
            </div>
        </div>
    )
}

export default Calc;