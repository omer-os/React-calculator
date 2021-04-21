import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [num, setNum] = useState('')
  const [Switch, setSwitch]=useState(false)
  const [method, setMethod]=useState('')
  const [result, setResult] = useState('')

  const btnHandle=(e)=>{
    const C=e.target.value
    if(Switch){
      setSecondNum(secondNum+C)
      setNum(num+C)
    }
    
    if(!Switch){
      setFirstNum(firstNum+C)
      setNum(num+C)
      setResult('')
    }
    
  }
  const Method=(e)=>{
    setSwitch(true)
    setMethod(e.target.value)
  }
  
  const equal=(e)=>{
    
    setNum(num+e.target.value)
    
    switch (method){
      
      case '+':
        setResult(parseInt(firstNum)+parseInt(secondNum));
        break;
        case '-':
          setResult(parseInt(firstNum)-parseInt(secondNum));
          break;
          case '*':
            setResult(parseInt(firstNum)*parseInt(secondNum));
            break;
            case '/':
              setResult(parseInt(firstNum)/parseInt(secondNum));
              break;
              
              default:
                setResult('onknown method');
                
              }
              
              
              setFirstNum('')
              setSecondNum('')
              setSwitch(false)
              setNum('')
              setMethod('')
            }
  useEffect(()=>{
    setNum(firstNum+method+secondNum)
  },[Method,btnHandle])
  
            return (
    <>
         <div className="calc">
           <div className="output">
             <h3 className='ans-1'>{num ? num : <br />}</h3>
             <p className='ans-2'>{result}</p>
           </div>

           <div className="input">
           <div className="row">
                <button value='1'  onClick={btnHandle}>1</button>
                <button value='2'  onClick={btnHandle}>2</button>
                <button value='3'  onClick={btnHandle}>3</button>
                <button value='+'  onClick={Method}>+</button>
              </div>

              <div className="row">
                <button value='4'  onClick={btnHandle}>4</button>
                <button value='5'  onClick={btnHandle}>5</button>
                <button value='6'  onClick={btnHandle}>6</button>
                <button value='-'  onClick={Method}>-</button>
              </div>

              <div className="row">
                <button value='7'  onClick={btnHandle}>7</button>
                <button value='8'  onClick={btnHandle}>8</button>
                <button value='9'  onClick={btnHandle}>9</button>
                <button value='*'  onClick={Method}>*</button>
              </div>

              <div className="row">
                <button >Ac</button>
                <button value='0'  onClick={btnHandle}>0</button>
                <button value='/'  onClick={Method}>//</button>
                <button value='='  onClick={equal}>=</button>
              </div>
           </div>
         </div>
    </>
  )
}

export default App;
