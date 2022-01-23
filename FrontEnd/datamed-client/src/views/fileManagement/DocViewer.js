import React from 'react'
import { useLocation } from 'react-router-dom'


function arrayBufferToBase64(buffer) {
    var blob = new Blob([buffer], { type: 'application/octet-binary' });
    var reader = new FileReader();

    reader.readAsDataURL(blob);

    return reader.result;
}


const DocViewer = () => {

    const location = useLocation()
    const { document } = location.state;
    console.log(location.state);

    console.log(document);

    let base64String = arrayBufferToBase64(document.data)

    const reader = new FileReader();

    console.log(base64String);

    return (

        <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${base64String}`} width='1366px' height='623px' frameBorder='0'></iframe>
    )
}


export default DocViewer;