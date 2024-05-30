import logo from './logo.svg';
import './App.css';
import './result.css'
import NumericButton from './components/NumericButton';



 function App() {
  const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
  const numericButtons = []

  numbers.forEach((numberRow) => {    
    let numberTableRow = []

    numberRow.forEach((number) => {
      numberTableRow.push(
          <td  className='bg-gray-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
           <NumericButton key={number} value={number}/>
          </td>
      )
    })
    numericButtons.push(<tr>{numberTableRow}</tr>)
  })


  return (
    <>
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