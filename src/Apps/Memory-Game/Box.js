function Box (props) {
    const { boxNumber, index, selectBox, isOpen, isMatched } = props;
    return(
        <div key={'box-' + index} 
            onClick={() => {selectBox(boxNumber, index)}} 
            className={`box col-sm-2 ${isOpen && 'open'} ${isMatched && 'matched'}`}>
                {boxNumber} ({index})
        </div>
    )
}

export default Box;