
import './App.css';
import './result.css'
import NumericButton from './components/NumericButton';
import OperationButton from './components/OperationButton';
import { useState } from 'react';


 function App() {

  const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
  const basicOperators = ['÷', '×', '-', '+', '=']
  const numericButtons = []

  var [result, setResult] = useState(0.0)
  var pendingOperation = undefined
  var pendingDecimal = false


  const buttonClicked2  = (value) => {
        pendingOperation = value
        console.log(value)
  }

  const buttonClicked3  = (value) => {
    if (pendingDecimal === false)
      {
        pendingDecimal = true
      }    
}

  const buttonClicked = (value) => {
    if (pendingOperation === undefined)
      {
        var number = value.numericValue
        if (pendingDecimal === true)
          {
            number *= 0.1
            console.log(typeof number)
            result = result + number
            console.log(result)
            setResult(result)
            return
            // 

            // number += result
          }
        setResult(number)
      }
      else
      {
        setResult(eval(`${result}${pendingOperation.value}${value.numericValue}`))
      }
  }


  var operatorIndex = 0


  numbers.forEach((numberRow) => {    
    let numberTableRow = []
    numberRow.forEach((number) => {
      numberTableRow.push(
          <td  className='bg-gray-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
           <NumericButton key={number} value={number} onClick={(value) => {
              buttonClicked(value)
            }
            }/>
          </td>
      )      
    })
    console.log(numberRow.length === 1)
    if (numberRow.length === 1)
      {
            numberTableRow.push(
        <td  className='bg-gray-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
       <NumericButton key='.' value='.' 
          onClick={(value) => {
              buttonClicked3(value)
            }
            }/>
      </td>
            )
      }
    numberTableRow.push(
      <td  className='bg-orange-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
       <OperationButton key={basicOperators[operatorIndex]} value={basicOperators[operatorIndex]} 
          onClick={(value) => {
              buttonClicked2(value)
            }
            }/>
      </td>
  )
    operatorIndex++
    numericButtons.push(<tr>{numberTableRow}</tr>)
  })


  return (
    <>
    <label>{result}</label>
      <table className="table-auto">
        <tbody>
          {numericButtons}
        </tbody>
      </table>
    </>
  );
}

export default App;

// /*
//   NumericButton component
//   OperationButton component
//   CalculatorComponent
//     Standard
//     Scientific
//     Programmer

//   Need states:
//     current value
//     what keys are pending(e.g. 3 to the power of 2 - 3^ and so on.)


// */