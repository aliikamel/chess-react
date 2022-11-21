import React from 'react'
import { useState } from 'react'

function BoardCell(props) {
    const colors = ["dark", "light"]
    const whitePieces = ['wp', 'wr', 'wn', 'wb', 'wq', 'wk']
    const blackPieces = ['bp', 'br', 'bn', 'bb', 'bq', 'bk']
    var colorclass = "";
    var piece = "";
    //do image with usestate
    // const [selectedPiece, setSelectedPiece] = useState(null);
    // const [hasPiece, setHasPiece] = useState(false);


    // Setting the cell color
    for (var i = 0; i < 8; i++) {
        if (props.number % 2 != 0) {
            for (var j = 0; j < 8; j++) {
                if (props.index % 2 != 0) {
                    colorclass = colors[0];
                } else {
                    colorclass = colors[1];
                }
            }
        } else {
            for (var j = 0; j < 8; j++) {
                if (props.index % 2 != 0) {
                    colorclass = colors[1];
                } else {
                    colorclass = colors[0];
                }
            }
        }
    }
    var cellClass = "board-cell " + colorclass

    // Setting the chess pieces
    for (var i = 0; i < 8; i++) {
        if (props.number == 2) {
            piece = whitePieces[0];
        } else if (props.number == 7) {
            piece = blackPieces[0];
        }
        else if (props.number == 1) {
            if (props.index == 1 || props.index == 8) {
                piece = whitePieces[3];
            } else if (props.index == 2 || props.index == 7) {
                piece = whitePieces[2];
            } else if (props.index == 3 || props.index == 6) {
                piece = whitePieces[3];
            } else if (props.index == 4) {
                piece = whitePieces[4];
            } else if (props.index == 5) {
                piece = whitePieces[5];
            }
        } else if (props.number == 8) {
            if (props.index == 1 || props.index == 8) {
                piece = blackPieces[3];
            } else if (props.index == 2 || props.index == 7) {
                piece = blackPieces[2];
            } else if (props.index == 3 || props.index == 6) {
                piece = blackPieces[3];
            } else if (props.index == 4) {
                piece = blackPieces[5];
            } else if (props.index == 5) {
                piece = blackPieces[4];
            }
        }
    }
    var img = "/icons/" + piece + ".png";

    // function selectPiece(piece) {
    //     if (piece.target.getAttribute("src") != "/icons/.png") {
    //         setSelectedPiece(piece.target.alt);
    //     }
    //     // console.log(selectedPiece)
    // }

    // function selectCell(piece) {
    //     // console.log(selectedPiece)
    //     if (piece.target.localName != "img") {
    //         if (piece.target.firstChild.getAttribute("src") == "/icons/.png") {
    //             setSelectedCell(piece.target.id);
    //             movePiece(piece.target.id);
    //         }
    //     }
    // }

    // function movePiece(id) {
    //     var cell = document.getElementById(id);
    //     if (selectedPiece) {
    //         // console.log(cell.firstChild.setAttribute("src", selectPiece))
    //     }
    // }

    return (
        // {props.letter} row={props.number} index={props.index}
        <div id={props.cell} value={img} className={cellClass}>
            <img id={props.cell} value={piece} src={img} alt={piece != "" ? img : ""} />
        </div>
    )
}

export default BoardCell