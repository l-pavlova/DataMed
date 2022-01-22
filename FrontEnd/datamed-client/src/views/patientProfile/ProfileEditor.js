import React from 'react'

import { Form, Button } from 'react-bootstrap';


const ProfileEditor = ({
    handleSubmit,
    values,
    handleChange
}) => {
    return (<Form className="col-md-8" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary" type="text">
                        {values.firstName || 'Bochka'}  {values.lastName || 'Bochkova'}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div input type="text" className="col-sm-9 text-secondary" value={values.email} placeholder='Email'>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                    </div>
                    <input type="text" className="col-sm-9 text-secondary" value={values.phoneNumber} placeholder='Phone'>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Age</h6>
                    </div>
                    <input type="text" placeholder="Age" className="col-sm-9 text-secondary" value={values.age}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">egn</h6>
                    </div>
                    <input type="text" className="col-sm-9 text-secondary" value={values.egn}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Height</h6>
                    </div>
                    <input type="text" className="col-sm-9 text-secondary" value={values.height}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Weight</h6>
                    </div>
                    <input className="col-sm-9 text-secondary" value={values.weight}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Blood type</h6>
                    </div>
                    <input className="col-sm-9 text-secondary" value={values.bloodType}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Constant diagnoses</h6>
                    </div>
                    <input className="col-sm-9 text-secondary" value={values.constantDiagnoses}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Pills taken</h6>
                    </div>
                    <input className="col-sm-9 text-secondary" value={values.pillsTakenRegularly}>
                    </input>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Short Medical History</h6>
                    </div>
                    <input className="col-sm-9 text-secondary" value={values.shortMedicalHistory}>
                    </input>
                </div>
                <hr />
                {<div className="row" style={{ align: 'center' }}>
                    <div className="col-sm-14">
                        <a className="btn btn-info" onClick={handleSubmit}>Save</a>
                    </div>
                </div>}
            </div>
        </div>
    </Form>)
}


export default ProfileEditor