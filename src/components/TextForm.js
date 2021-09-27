import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () =>{ 
    // console.log("clicked" + text);
    let newText = text.toUpperCase();
    
    setText(newText);
  }
  const handleLoClick = () =>{
    // console.log("clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () =>{
    // console.log("clicked" + text);
    let newText = "";
    setText(newText);
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = (params) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange = (event) =>{
    // console.log(text);
    setText(event.target.value);
  }
  return (
    <>
    <div className="container" style={{color: props.mode ==='light'?'#042743':'white'}}>
      <h1 >{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control mb-3"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode ==='dark'?'#042743':'white', color: props.mode ==='light'?'#042743':'white'}}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




      </div>
    </div>
    <div className="container my-3" style={{color: props.mode ==='light'?'#042743':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length } minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview"}</p>
    </div>
    </>
  );
}
