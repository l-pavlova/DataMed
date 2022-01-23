import React, { useState, useCallback, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import './Templates.css'
import FileUploader from '../fileManagement/FileUploader';
import recordsService from '../../services/recordsService';
const Templates = ({ temps }) => {


    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        recordsService.getTemplates().then(temps => {
            console.log(temps);
            setTemplates(temps);
        })
    }, []);

    const handleDownload = async (name) => {
        if (name) {
            console.log(name);
            const link = document.createElement("a");
            link.target = "_blank";
            link.download = `${name}`
            link.href = `http://localhost:8081/templates/download?filename=${name}`;
            link.click();
        }
    }

    const getItems = useCallback(() => {
        return templates
    }, [templates]);

    const List = ({ getItems }) => {
        const [items, setItems] = useState([]);


        useEffect(() => {
            console.log('reload');
            setItems(getItems());
        }, [getItems, items])

        return items.map((rec, index) =>
            <li key={index} className="list-group-item list-group-item-action" title='tooltip'>
                <p>
                    <a onClick={() => { handleDownload(rec.fileName) }}>{rec.fileName}
                    </a>
                </p>
            </li>);
    }

    const handleUploadTemplate = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        await recordsService.addTemplate(formData).then((res) => {
            console.log(`in then res is: ${res}`);
        }).catch(err => {
            console.log(`in catch res is: ${err}`);
            recordsService.getTemplates().then(gotten => {
                console.log('gat them');
                console.log(gotten);
                setTemplates(gotten);
            })
        });
    }

    return (
        <div className='templates-container'>
            <h3>Available tempaltes to fill for medical records:</h3>
            <ul className='templates-list'>
                <List getItems={getItems}></List>
                <FileUploader style={{ position: 'relative', top: 30 + '%', left: + '%' }} handleFileUpload={handleUploadTemplate}></FileUploader>
            </ul>
          
        </div>
    );

}

export default Templates;

