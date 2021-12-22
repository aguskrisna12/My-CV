function Box (props) {
    const { boxNumber, index, selectBox, isOpen, isMatched, imageSource } = props;
    return(
        <div key={'box-' + index}
            onClick={() => {selectBox(boxNumber, index)}} 
            className={`box col-sm-2 ${isOpen && 'open'} ${isMatched && 'matched'}`}>
                <div style={{backgroundImage: `url(${imageSource})`, 
                             backgroundSize: 'cover'}}
                    className={`box-image ${(isOpen || isMatched) && 'showImage'}`}></div>
                {boxNumber} ({index})
        </div>
    )
}

export default Box;