import React, { useState } from 'react'

function InputUppercase(props) {
  // create useState
  const [change, setChange] = useState("");

  // for target input value
  const changeHandler = (e) => {
    setChange(e.target.value);
  }

  // convert to uppercase
  const clickUpChange = () => {
    const textUpper = change.toUpperCase();
    setChange(textUpper);
  }

  // convert to lowercase
  const clickLowChange = () => {
    const textUpper = change.toLowerCase();
    setChange(textUpper);
  }

  // for clear text
  const clearText = () => {
    setChange('');
  }

  // for copy all text
  const copyText = () => {
    let t = document.getElementById("exampleTextarea");
    t.select();
    navigator.clipboard.writeText(t.value);
  }

  // for remove extra spaces
  const removeSpaces = () => {
    let r = change.split(/[ ]+/)
    setChange(r.join(" "))
  }
  const mystyle = {
    color: props.mode === 'light' ? 'black' : 'white'
  };
  return (
    <div className="container w-75 my-4" style={mystyle}>
      <label htmlFor="exampleTextarea my-5" className="form-label"><h3>Converter Textarea</h3></label>
      <textarea className="form-control mb-4" value={change} onChange={changeHandler} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', borderColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleTextarea" rows="4"></textarea>
      <button type="button" className="btn btn-primary m-2" onClick={clickUpChange}>Uppercase</button>
      <button type="button" className="btn btn-primary m-2" onClick={clickLowChange}>Lowercase</button>
      <button type="button" className="btn btn-primary m-2" onClick={clearText}>ClearText</button>
      <button type="button" className="btn btn-primary m-2" onClick={copyText}>CopyText</button>
      <button type="button" className="btn btn-primary m-2" onClick={removeSpaces}>Remove Spaces</button>

      <h4 className='mt-5 mb-3'>Textarea summary</h4>
      <p><b>Total words -</b> {change.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
      <p><b>Characters -</b> {change.length}</p>
      <p><b>Preview - </b>{change.length > 0 ? change : "Enter Something to preview"}</p>
    </div>
  )
}

export default InputUppercase