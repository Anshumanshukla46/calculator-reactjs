import React from 'react'
import "./Ui.css"

function Ui(props) {

    console.log(props);

    return (
        <div className="container">

            <form action="" name="calc" className="calculator">

                <input type="text" className="value" readOnly
                    name="txt"
                    value={props.current} />

                <span className="num clear" onClick={props.clear}>
                    <i>C</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("/")}>
                    <i>/</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("*")}>
                    <i>*</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("7")}>
                    <i>7</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("8")}>
                    <i>8</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("9")}>
                    <i>9</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("-")}>
                    <i>-</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("4")}>
                    <i>4</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("5")}>
                    <i>5</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("6")}>
                    <i>6</i>
                </span>

                <span className="num plus" onClick={() => props.addAtEnd("+")}>
                    <i>+</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("+")}>
                    <i>1</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("2")}>
                    <i>2</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("3")}>
                    <i>3</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("0")}>
                    <i>0</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd("00")}>
                    <i>00</i>
                </span>

                <span className="num" onClick={() => props.addAtEnd(".")}>
                    <i>.</i>
                </span>


                <span
                    className="num equal"
                    onClick={props.evaluate}
                >
                    <i>=</i>
                </span>

            </form>
        </div>
    )
}

export default Ui
