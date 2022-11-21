import React from 'react'
import BoardRow from './BoardRow'
import { useState } from 'react'


function Board() {

    const boardY = [8, 7, 6, 5, 4, 3, 2, 1];
    const [selectedCell, setSelectedCell] = useState(null);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [selectedPieceSrc, setSelectedPieceSrc] = useState(null);
    const [validMoves, setValidMoves] = useState([])

    var moves = [];
    function setMoves(piece){
        if (selectedPiece === 'wp'){
            var cell = piece.target.id;
            var row = Number(cell.slice(1));
            var letter = cell.slice(0,1);
            for (var i = row; i < row+2 ; i++){
                var move = letter+(i+1);
                moves.push(move);
            }
            setValidMoves(moves)
            for (move in moves){
                document.getElementById(moves[move]).classList.add('moves')
            }
        }
    }

    function handleClick(e) {
        if (e.target.localName === 'div') {
            setSelectedCell(e.target.id)
            if (selectedPiece) {
                movePiece(e.target.id)
            }
        }
        else if (e.target.localName === 'img') {
            setSelectedPiece(e.target.getAttribute('value'));
            setSelectedPieceSrc(e.target.getAttribute('src'));
            console.log(moves)
            moves.forEach(move => {
                document.getElementById(moves[move]).classList.remove('moves')
            });
            setMoves(e)
        }
    }

    function movePiece(cell) {
        document.getElementById(cell).firstChild.setAttribute('src', selectedPieceSrc);
    }

    return (
        <div onClick={handleClick} className='board'>
            {boardY.map((number, index) => (
                <BoardRow
                    key={number}
                    number={number} />
            ))}
        </div>
    )
}

export default Board