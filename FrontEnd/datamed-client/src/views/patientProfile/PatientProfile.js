
import React from 'react';

import './PatientProfile.css';
import avatar from "../../assets/patient.jpg";
import { useLocation } from 'react-router-dom'
import MedicalRecords from './MedicalRecords'

const PatientProfile = ({

}) => {

    const location = useLocation()
    const { patient } = location.state;
    console.log(patient);
    console.log('in patient profile');

    return (<div className='containerche'>
        <div className="main-body">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={avatar} alt="doc-avatar" className="doc-avatar" />
                                <div className="mt-3">
                                    <h4>  {patient.firstName || 'Bochka'}  {patient.lastName || 'Bochkova'}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
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
                        {/* <div className="row">
                            <div className="col-sm-14">
                                <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Add a n</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <MedicalRecords recs={patient.records} className="medical-records"></MedicalRecords>
    </div>
    )
}


export default PatientProfile