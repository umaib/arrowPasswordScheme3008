import React, { useState } from 'react';
import './App.css';

const App = (correctPassword, onCorrect, onIncorrect) => {
  correctPassword = "0000000";
  onCorrect = () => {console.log("correct")}
  onIncorrect = () => {console.log("incorrect")}

  const[masterPassword, setMasterPassword] = useState("");

  //Check if limit reached
  const checkLimit = () => {
    console.log(masterPassword);
    if(masterPassword.length === 7){
      if(masterPassword === correctPassword){
        alert('Correct :)');
        onCorrect();
      }
      else{
        alert('Incorrect :(');
        onIncorrect();
      }
       
      setMasterPassword("");
    }

  }

  //Button click event handlers 
  const upArrowClicked = () => {
    setMasterPassword(masterPassword+"0");
    checkLimit();
  } 
  const upRightArrowClicked = () => {
    setMasterPassword(masterPassword+"1");
    checkLimit();
  } 
  const rightArrowClicked = () => {
    setMasterPassword(masterPassword+"2");
    checkLimit();
  }
  const downRightArrowClicked = () => {
    setMasterPassword(masterPassword+"3");
    checkLimit();
  }
  const downArrowClicked= () => {
    setMasterPassword(masterPassword+"4");
    checkLimit();
  }
  const downLeftArrowClicked= () => {
    setMasterPassword(masterPassword+"5");
    checkLimit();
  }
  const leftArrowClicked = () => {
    setMasterPassword(masterPassword+"6");
    checkLimit();
  }
  const upLeftArrowClicked = () => {
    setMasterPassword(masterPassword+"7");
    checkLimit();
  }

 // function App() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div style ={{flex: 1, flexDirection: 'row'}}>
              <button style={{borderRadius: 5}}><img id="up-arrow" style={{width:80, height:100, borderRadius: 10 }} src={require("./upLeftArrow.png")} onClick={upLeftArrowClicked} alt="hello" /></button>
              <button><img id="up-arrow" style={{width:80, height:100}} src={require("./upArrow.png")} onClick={upArrowClicked} alt="hello" /></button>
              <button style={{borderRadius: 5}}><img id="up-arrow" style={{width:80, height:100}} src={require("./upRightArrow.png")} onClick={upRightArrowClicked} alt="hello" /></button>
            </div>
            <div style ={{flex: 1, flexDirection: 'row'}}>
              <button ><img id="up-arrow" style={{width:80, height:100}} src={require("./leftArrow.png")} onClick={leftArrowClicked} alt="hello" /></button>
              <button><img id="up-arrow" style={{width:80, height:100}} src={require("./blank.png")} onClick={leftArrowClicked} alt="hello" /></button>
              <button><img id="up-arrow" style={{width:80, height:100}} src={require("./rightArrow.png")} onClick={rightArrowClicked} alt="hello" /></button>
            </div>
            <div style ={{flex: 1, flexDirection: 'row'}}>
            <button style={{borderRadius: 5}}><img id="up-arrow" style={{width:80, height:100}} src={require("./downLeftArrow.png")} onClick={downLeftArrowClicked} alt="hello" /></button>
            <button><img id="up-arrow" style={{width:80, height:100}} src={require("./downArrow.png")} onClick={downArrowClicked} alt="hello" /></button>
            <button style={{borderRadius: 5}}><img id="up-arrow" style={{width:80, height:100}} src={require("./downRightArrow.png")} onClick={downRightArrowClicked} alt="hello" /></button>
            </div>
          </div>
        </header>
      </div>

      

    );
//  }
}
export default App;
