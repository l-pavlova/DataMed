import React from 'react';

import { Button } from 'react-bootstrap'


const FileUploader = (handleFileUpload) => {
    const hiddenFileInput = React.useRef(null);

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
            <Button onClick={handleClick}>
                Upload a file
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