import React from 'react'


const ProfileViewer = ({ patientModel }) => {
    return (<div className="col-md-8">
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary" >
                        {patientModel.firstName || 'Imena'}  {patientModel.lastName || 'Imenova'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {patient.email || 'patient@gmail.com'}
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
                        {patientModel.age || '12'}
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
                        {patientModel.height || 'unknown'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Weight</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {patientModel.weight || 'unknown'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Blood type</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {patientModel.bloodType || 'unknown'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Constant diagnoses</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {patientModel.constantDiagnoses || 'zdravi sme 2.0'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Pills taken</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {patientModel.pillsTakenRegularly || 'unknown'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Short Medical History</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {patientModel.shortMedicalHistory || 'unknown'}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}