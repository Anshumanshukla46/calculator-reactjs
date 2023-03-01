import React from 'react';
import './App.css';
import Ui from "./Ui"

function App() {

  const [cur, setCur] = React.useState("");

  function clear() {
    setCur("");
  }

  function addAtEnd(str) {
    if (str.length === 2) {
      setCur("Can't divide by 0")
      return
    }

    setCur(old => {
      return old + str
    })

  }


  function evaluate() {
    setCur(old => {
      return eval(old) + ""
    })
  }


  return (
    <div>

      <Ui
        current={cur}
        clear={clear}
        addAtEnd={addAtEnd}
        evaluate={evaluate}
      />

    </div>
  );
}

export default App;
