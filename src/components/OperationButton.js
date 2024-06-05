const OperationButton = ({value, onClick}) => {

    return (
        <button className='w-full text-white-600 text-left' onClick={(event) => {
            onClick({value})
        }}>{value}</button>
    )
}

export default OperationButton
