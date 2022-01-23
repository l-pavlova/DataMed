
import React, { useState } from 'react';
import './PatientProfile.css';
import avatar from "../../assets/patient.jpg";
import { useLocation } from 'react-router-dom'
import MedicalRecords from './MedicalRecords'
import NavBar from '../navigation/NavBar';
import Footer from '../navigation/Footer';
import FileUploader from '../fileManagement/FileUploader';
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
    
    const [patientModel, setPatient] = useState(patient);

    let image = avatar;
    if (patientModel.image) {
        let base64String = arrayBufferToBase64(patientModel.image)
        const base64Image = 'data:image/png;base64,'.concat(base64String);
        image = base64Image;
    }
    const handleFileUpload = async (file) => {
        let formData = new FormData();
        formData.append('picture', file);
        recordsService.addProfilePicPatient(formData, patientModel.id).then(() => {
            console.log('resetting')
            setPatient(userService.getPatientById(patientModel.id));
        }).catch(err => {
            console.log('updating pic')
            userService.getPatientById(patientModel.id).then(gotten => {
                console.log('gatttheeem');
                console.log(gotten);
                setPatient(gotten);
            })
        });
    }

    const handleUpdateSubmit = async (data) => {
      
        console.log(data);
        userService.updatePatient(data, patientModel.id).then(res => {
          
            console.log(res)
            userService.getPatientById(patientModel.id).then(gotten => {
                console.log('handling and shit');
                console.log(gotten);
                setPatient(gotten);
                setEdit(false);
            })
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
                                    <h4>  {patientModel.firstName || 'Bochka'}  {patientModel.lastName || 'Bochkova'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {edit ? <ProfileEditor handleSubmit={handleUpdateSubmit} patient={patientModel} handleChange={e => console.log('ops')} ></ProfileEditor> : <div className="col-md-8">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary" >
                                {patientModel.firstName || 'Bochka'}  {patientModel.lastName || 'Bochkova'}
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
                                {patientModel.phoneNumber || '(239) 816-9029'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Age</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.age || '0'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">egn</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.egn || '000000000'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Height</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.height || 'Unknown'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Weight</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.weight || 'Unknown'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Blood type</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.bloodType || 'Unknown'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Constant diagnoses</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.constantDiagnoses || 'None'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Pills taken</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.pillsTakenRegularly || 'None'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Short Medical History</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {patientModel.shortMedicalHistory || 'None'}
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
        <MedicalRecords recs={patientModel.records} isDoc={isDoc} id={patientModel.id} className="medical-records"></MedicalRecords>

        <Footer>
        </Footer>
    </div>

    )
}


export default PatientProfile