import React, { useState } from 'react'

export default function TextForm(props) {


    let [text, setText] = useState('');
    let [emaillst, setEmaillst] = useState('');

    // to uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked..");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    // to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    // clear text
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text area cleared successfully!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    // remove extra spaces
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }


    // count number of words in the textarea
    const wordCount = () => {
        return text === "" ? 0 : text.split(" ").length
    }

    // count number of characters in the textarea
    const charCount = () => {
        return text.length;
    }

    // extract emails
    const handleEmailClick = () => {
        emaillst = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

        if (emaillst === null) {
            // no Email Address Found
        } else {
            const uniqueEmail = Array.from(new Set(emaillst));
            const finaluniqueEmail = [];
            for (let i = 0; i <= uniqueEmail.length; i++) {
                let characterIs = String(uniqueEmail[i]).charAt(String(uniqueEmail[i]).length - 1)
                if (characterIs === '.') {
                    finaluniqueEmail.push(String(uniqueEmail[i].slice(0, -1)))
                } else {
                    finaluniqueEmail.push(uniqueEmail[i]);
                }
            }
            emaillst = finaluniqueEmail.join('\n').toLowerCase();
        }
        setEmaillst(emaillst);
        props.showAlert("Email extracted successfully", "success")
    }

    // text = "new text"; // wrong way to change the state
    // setText("new text"); // corrext way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"  >Example textarea</label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="12" onChange={handleOnChange}  ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick} >Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleEmailClick} >Extract Emails</button>
                <button className='btn btn-primary mx-2' onClick={removeExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>{wordCount()} words, {charCount()} characters</p>
                <p>{0.008 * wordCount()} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here!!"}</p>
                <h2>Extracted Emails</h2>
                <p>{emaillst}</p>

            </div>
        </>
    )
}

/*

state -> belongs to a component

hooks -> helps to use the features of class component in the function component
*/