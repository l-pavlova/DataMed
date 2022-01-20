import React from 'react'
import { Button } from 'react-bootstrap';
import './Templates.css'
import FileUploader from '../fileUpload/FileUploader';
import recordsService from '../../services/recordsService';
const Templates = ({ temps }) => {

    const handleFileUpload = (file) => {
            let formData = new FormData();
            formData.append('file', file);
            recordsService.addTemplate(formData);
    }
    return (
        <div className='templates-container'>
            Available tempaltes to fill for medical records:
            <ul>
                {
                    temps && temps.map(r => {
                        <li>{r} <Button>Fill</Button></li>
                    })
                }
            </ul>
            <FileUploader style={{ position: 'relative', top: 30 + '%', left:  + '%' }} handleFileUpload={handleFileUpload}></FileUploader>

        </div>
    );

}

export default Templates;

