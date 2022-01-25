import React, { useEffect, useState, useCallback } from 'react'
import "./MedicalRecords.css"
import FileUploader from '../fileManagement/FileUploader'
import recordsService from '../../services/recordsService'
import Tooltip from "./Tooltip"
const MedicalRecords = ({ recs, isDoc, id }) => {

    const [records, setRecords] = useState(recs);
    useEffect(() => {
        recordsService.getRecords(id).then(r => setRecords(r));
    }, [])
    const handleDownload = async (name) => {
        if (name) {
            console.log(name);
            const link = document.createElement("a");
            link.target = "_blank";
            link.download = `${name}`
            link.href = `http://localhost:8081/patient-records/download?filename=${name}&id=${id}`;//dont mind my mizeria here nqmashe vreme.
            link.click();
            // recordsService.downloadRecord(name, id)
            //     .then((res) => {
            //         console.log(res);
            //         link.href = URL.createObjectURL(
            //             new Blob([res.data], { type: "application/pdf" })
            //         );
            //         link.click();
            //     });

        }
    }

    const getItems = useCallback(() => {
        return records
    }, [records]);

    const List = ({ getItems }) => {
        const [items, setItems] = useState([]);


        useEffect(() => {
            console.log('reload');
            setItems(getItems());
        }, [getItems, items])

        return items.map((rec, index) =>
            <li key={index} className="list-group-item list-group-item-action" title='tooltip'>
                <a onClick={() => { handleDownload(rec.fileName) }}>{rec.fileName ? rec.fileName : rec.name}
                </a>
            </li>);
    }

    const handleUploadRecord = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        await recordsService.addRecord(formData, id).then((res) => {
            console.log(`in then res is: ${res}`);
        }).catch(err => {
            console.log(`in catch res is: ${err}`);
            recordsService.getRecords(id).then(gotten => {
                console.log('gat them');
                console.log(gotten);
                setRecords(gotten);
            })
        });
    }

    return (
        <div className='rec-containter'>
            <h3>{isDoc ? "Patient's medical records in one place" : "Your medical records in one place"}</h3>
            <div className='list-cont'>
                <ul className="list-group">
                    <List getItems={getItems}></List>
                    {isDoc && <FileUploader handleFileUpload={handleUploadRecord} text="Add more records"></FileUploader>}
                </ul>
            </div>
        </div>
    );

}

export default MedicalRecords;

