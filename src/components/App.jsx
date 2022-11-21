import React from "react"
import ReactDOM from "react-dom"
import Board from "./Board"

function App() {

    return (
        <div className="main-container">
        <h1>YUURRR CHAM CHESS GAME</h1>
            <div className="container">
                <div className="num-label">
                    <h2>8</h2>
                    <h2>7</h2>
                    <h2>6</h2>
                    <h2>5</h2>
                    <h2>4</h2>
                    <h2>3</h2>
                    <h2>2</h2>
                    <h2>1</h2>
                </div>
                <Board />
            </div>
            <div className="letter-label">
                <h2>a</h2>
                <h2>b</h2>
                <h2>c</h2>
                <h2>d</h2>
                <h2>e</h2>
                <h2>f</h2>
                <h2>g</h2>
                <h2>h</h2>
            </div>
        </div>
    )
}

export default App