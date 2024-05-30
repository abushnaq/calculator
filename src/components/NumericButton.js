const NumericButton = ({value}) => {
    let numericValue = value
    return (
        <button className='w-full text-white-600 text-left'>{numericValue}</button>
    )
}

export default NumericButton
