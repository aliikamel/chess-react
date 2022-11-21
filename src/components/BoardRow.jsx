import React from 'react'
import BoardCell from './BoardCell'

function BoardRow(props) {

    const id = "row"+props.number

    const boardX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const dark = "dark";
    const light = "light";


    return (
        <div className='boardrow' id={id}>
            {boardX.map((letter, index) => (
                <BoardCell
                    key={letter + props.number}
                    cell={letter + props.number}
                    letter={letter}
                    number={props.number}
                    index={index+1}
                />
            ))}
        </div>
    )
}

export default BoardRow