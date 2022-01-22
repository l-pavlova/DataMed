
import React, { useState } from 'react';
import './PatientProfile.css';
import avatar from "../../assets/patient.jpg";
import { useLocation } from 'react-router-dom'
import MedicalRecords from './MedicalRecords'
import NavBar from '../navigation/NavBar';
import Footer from '../navigation/Footer';
import FileUploader from '../fileUpload/FileUploader';
import recordsService from '../../services/recordsService';
import arrayBufferToBase64 from '../../utils/imgStringConverter';
import userService from '../../services/userService';
import ProfileEditor from './ProfileEditor';

const PatientProfile = ({
}) => {

    const location = useLocation()
    const { patient, isDoc } = location.state;
    console.log(patient);
    const [edit, setEdit] = useState(false);

    let image = avatar;
    if (patient.image) {
        let base64String = arrayBufferToBase64(patient.image)
        const base64Image = 'data:image/png;base64,'.concat(base64String);
        image = base64Image;
    }
    console.log(patient.records);

    //  const [edit, setEdit] = useState(false);

    const handleFileUpload = (file) => {
        let formData = new FormData();
        formData.append('picture', file);
        recordsService.addProfilePicPatient(formData, patient.id);
    }

    const handleUpdateSubmit = async (data) => {
        console.log('handling and shit');
        console.log(data);
        await userService.updatePatient(data, patient.id).then(res => {
            setEdit(false);
            console.log(res)
        });
    }

    return (<div className='containerche'>
        <NavBar>
        </NavBar>
        <div className="main-body">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img width="250" src={image} />
                                <FileUploader handleFileUpload={handleFileUpload} text="Change profile pic"></FileUploader>
                                <div className="mt-3">
                                    <h4>  {patient.firstName || 'Bochka'}  {patient.lastName || 'Bochkova'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {edit ? <ProfileEditor handleSubmit={handleUpdateSubmit} patient={patient} handleChange={e => console.log('ops')} ></ProfileEditor> : <div className="col-md-8">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary" >
                                {patient.firstName || 'Bochka'}  {patient.lastName || 'Bochkova'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.email || 'sexypatient@gmail.com'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Phone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.phoneNumber || '(239) 816-9029'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Age</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.age || '12'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">egn</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.egn || '000000000'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Height</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.height || '198'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Weight</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.weight || '100 kila manqk'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Blood type</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.bloodType || 'A grupa maqnk'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Constant diagnoses</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.constantDiagnoses || 'zdravi sme 2.0'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Pills taken</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.pillsTakenRegularly || 'zdravi sme'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Short Medical History</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patient.shortMedicalHistory || 'zdravi sme'}
                            </div>
                        </div>
                        <hr />
                        {<div className="row" style={{ align: 'center' }}>
                            <div className="col-sm-14">
                                <a className="btn btn-info " onClick={e => setEdit(!edit)} >Edit</a>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            }
        </div>
        <MedicalRecords recs={patient.records} isDoc={isDoc} id={patient.id} className="medical-records"></MedicalRecords>

        <Footer>
        </Footer>
    </div>

    )
}


export default PatientProfile