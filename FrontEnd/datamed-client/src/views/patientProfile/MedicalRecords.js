import React, { useEffect, useState, useCallback } from 'react'
import "./MedicalRecords.css"
import FileUploader from '../fileUpload/FileUploader'
import recordsService from '../../services/recordsService'
import { Link } from 'react-router-dom'
import FileDownload from 'js-file-download'
const MedicalRecords = ({ recs, isDoc, id }) => {
    //todo: add link to record page
    //todo: add refresh of docs upon adding a new one
    const [down, SetDo] = useState(false);
    const [records, setRecords] = useState(recs);
    const initialValues = recs.map((rec, index) =>
        <li key={index} className="list-group-item list-group-item-action" >
            {rec.fileName ? rec.fileName : rec.name}
        </li>);
    const [listItems, setListItems] = useState(initialValues
    );

    const handleDownload = async(name) => {


        if (name) {

            const link = document.createElement("a");
            link.target = "_blank";
            link.download = `${name}`
            recordsService.downloadRecord(name, id)
              .then((res) => {
                link.href = URL.createObjectURL(
                  new Blob([res.data], { type: "application/pdf" })
                );
                link.click();
              });

        }




        // window.location = `/patient-records/download?filename=${name}&id=${id}`
    }

    const getItems = useCallback(() => {
        return records
    }, [records]);

    const List = ({ getItems }) => {
        const [items, setItems] = useState([]);

        useEffect(() => {
            setItems(getItems());
        }, [getItems])

        return items.map((rec, index) =>
            <li key={index} className="list-group-item list-group-item-action" >
                <a onClick={handleDownload(rec.fileName)}>nzn</a>
                {rec.fileName ? rec.fileName : rec.name}
            </li>);
    }

    const handleUploadRecord = (file) => {
        let formData = new FormData();
        formData.append('file', file);
        recordsService.addRecord(formData, id);
        recs.push({ file: file });
        setRecords(recs);
        /*  setListItems(recs.map((rec, index) =>
              <li key={index}>
                  {rec.fileName ? rec.fileName : rec.name}
              </li>));*/
    }

    return (
        <div className='rec-containter'>
            <h2>{isDoc ? "Patient's medical records in one place" : "Your medical records in one place"}</h2>
            <ul className="list-group">
                <List getItems={getItems}></List>
                <FileUploader handleFileUpload={handleUploadRecord} text="Add more records"></FileUploader>
            </ul>

        </div>
    );

}

export default MedicalRecords;

