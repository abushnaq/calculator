const Button = ({value}) => {
    const basicOperators = ['+', '-', '×', '÷', '=']
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const numberStyle = 'bg-gray-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left w-full text-white-600 text-left'
    const basicOperatorStyle = 'bg-gray-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left w-full text-white-600 text-left'
    const style = 'bg-gray-100 border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left w-full text-white-600 text-left'

    if (basicOperators.includes(value))
    {
        style = basicOperatorStyle
    }
    else if (numbers.includes(value))
    {
        style = numberStyle
    }


    let numericValue = value
    return (
        <button className={style}>{value}</button>
    )
}

export default Button
