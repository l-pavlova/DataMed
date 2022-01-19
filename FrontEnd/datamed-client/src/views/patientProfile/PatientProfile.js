
import React from 'react';

import './PatientProfile.css';
import avatar from "../../assets/patient.jpg";
import userService from '../../services/userService';
const PatientProfile = ({
    values
}) => {

    const patient = userService.getPatientById(values.id);
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
                                {values.firstName || 'Bochka'}  {values.lastName || 'Bochkova'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.email || 'sexypatient@gmail.com'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Phone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.phoneNumber || '(239) 816-9029'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Age</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.age || '12'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">egn</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.egn || '000000000'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Height</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.height || '198'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Weight</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.weight || '100 kila manqk'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Blood type</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.bloodType || 'A grupa maqnk'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Constant diagnoses</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.constantDiagnoses || 'zdravi sme 2.0'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Pills taken</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.pillsTakenRegularly || 'zdravi sme'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Short Medical History</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.shortMedicalHistory || 'zdravi sme'}  
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-14">
                                <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
    )
}


export default PatientProfile