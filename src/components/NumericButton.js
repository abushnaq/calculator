const NumericButton = ({value, onClick}) => {
    let numericValue = value
    return (
        <button className='w-full text-white-600 text-left' onClick={(event) => {
            onClick({numericValue})
        }}>{numericValue}</button>
    )
}

export default NumericButton
