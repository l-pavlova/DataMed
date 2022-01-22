import React, {useState} from 'react';

import { Button } from 'react-bootstrap'


const FileUploader = ({handleFileUpload, text}) => {
    const hiddenFileInput = React.useRef(null);

    const [btnText, setButtonText] = useState( text || "Upload a file");
    
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
        handleFileUpload(fileUploaded);
    };
    return (
        <>
            <Button onClick={handleClick} style={{ paddingTop: 4 + 'px' }}>
                {btnText}
            </Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
}


export default FileUploader