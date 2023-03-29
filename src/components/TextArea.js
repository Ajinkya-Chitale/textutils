import React, {useState} from 'react'

export default function TextArea(props) {
    const handleUpClick = () => {
        setIsCaptial(false);
        let newText = text.toUpperCase();
        setText(newText);
        text.length > 0 ? props.showAlertMsg('success','Text converted to uppercase') : props.showAlertMsg('danger','Please enter text');
    }

    const handleLoClick = () => {
        setIsCaptial(false);
        let newText = text.toLowerCase();
        setText(newText);
        text.length > 0 ? props.showAlertMsg('success','Text converted to lowercase') : props.showAlertMsg('danger','Please enter text');
    }

    const handleCaClick = () => {
        setIsCaptial(true);
        text.length > 0 ? props.showAlertMsg('success','Text converted to capitalize') : props.showAlertMsg('danger','Please enter text');
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        // setText(newText);
    }

    const handleCopyClick = () => {
        setIsCaptial(false);
        navigator.clipboard.writeText(text);
        text.length > 0 ? props.showAlertMsg('success','Text copied successfully') : props.showAlertMsg('danger','Please enter text');
        // alert(`Text copied successfully...`);
    }

    const handleRemoveClick = () => {
        let newText = text.split(' ').filter(ele => ele !== '');
        let finalText = '';
        for (const item of newText) {
            finalText += `${item} `;
        }
        setText(finalText);
        text.length > 0 ? props.showAlertMsg('success','Removed extra whitespaces') : props.showAlertMsg('danger','Please enter text');
    }

    const handleClear = () => {
        setIsCaptial(false);
        let newText = '';
        setText(newText);
        text.length > 0 ? props.showAlertMsg('success','Textarea cleared') : props.showAlertMsg('danger','Please enter text');
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState("");
    const [isCaptial, setIsCaptial] = useState(false);

    return (
        <>
            <div className="parentContainer" style={{backgroundColor:`${props.mode === 'dark' ? '#0b6174' : 'white'}`,color:`${props.mode === 'dark' ? 'white' : 'black'}`}}>
                <div className='container'>
                    <h1 className='fs-4 text-capitalize'>{props.heading}</h1>
                    <div className='mb-3'>
                        <textarea style={{backgroundColor:`${props.mode === 'dark' ? '#233b52' : 'white'}`,color:`${props.mode === 'dark' ? 'white' : 'black'}`}} className={isCaptial === true ? 'form-control text-capitalize' : 'form-control'} value={text} onChange={handleOnChange} id="textUtilsControlTextarea" rows="8"></textarea>
                    </div>
                    <div className='btnContainer'>
                        <button type="button" onClick={handleUpClick} className="btn btn-primary mb-2 me-2" disabled={text.length === 0}>Convert to Uppercase</button>
                        <button type="button" onClick={handleLoClick} className="btn btn-primary mb-2 me-2" disabled={text.length === 0}>Convert to Lowercase</button>
                        <button type="button" className="btn btn-primary mb-2 me-2" disabled={text.length === 0} onClick={handleCaClick}>Convert to Captalize</button>
                        <button type="button" className="btn btn-primary mb-2 me-2" disabled={text.length === 0} onClick={handleCopyClick}>Copy Text</button>
                        <button type="button" className="btn btn-primary mb-2 me-2" disabled={text.length === 0} onClick={handleRemoveClick}>Remove Extra Spaces</button>
                        <button type="button" className="btn btn-primary mb-2 me-2" disabled={text.length === 0} onClick={handleClear}>Clear Text</button>
                    </div>
                </div>
                <div className="container">
                    <h5>Text Summary</h5>
                    <div className="wordCount">
                        <p className='mb-2'>Total Words: <strong>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length}</strong></p>
                        <p className='mb-2'>Total Words Length: <strong>{text.length}</strong></p>
                        <p className='mb-2'>Take Time To Read: <strong>{0.008 * text.split(' ').filter((ele) => {return ele.length !== 0}).length}</strong> Minutes</p>
                    </div>
                    <h5 className='mb-2 mt-4'>{text.length > 0 ? 'Preview' : 'Nothing to preview'}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
