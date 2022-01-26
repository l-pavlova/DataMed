import React from 'react';
import { Form, } from 'react-bootstrap';
import { Field } from 'formik'

import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileEditorView = ({
    handleSubmit,
    handleChange,
    values,
}) => {
    return (
        <Form noValidate className="col-md-8">

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
                        <div className="col-sm-9 text-secondary">
                            {values.email || 'sexypatient@gmail.com'}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <Field onChange={handleChange} value={values.phoneNumber} name="phoneNumber" type="text" className="input-field col-sm-9 text-secondary" placeholder='Phone' />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Age</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="age" placeholder="Age" className="input-field col-sm-9 text-secondary" value={values.age} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">egn</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="egn" className="input-field col-sm-9 text-secondary" value={values.egn} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Height</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="height" className="input-field col-sm-9 text-secondary" value={values.height} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Weight</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="weight" className="input-field col-sm-9 text-secondary" value={values.weight} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Blood type</h6>
                        </div>
                        <Field type="text" name="bloodType" className="input-field col-sm-9 text-secondary" value={values.bloodType} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Constant diagnoses</h6>
                        </div>
                        <Field type="text" name="constantDiagnoses" className="input-field col-sm-9 text-secondary" value={values.constantDiagnoses} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Pills taken</h6>
                        </div>
                        <Field onChange={handleChange} onChange={handleChange} type="text" name="pillsTakenRegularly" className=" input-field col-sm-9 text-secondary" value={values.pillsTakenRegularly} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Short Medical History</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="shortMedicalHistory" className="input-field col-sm-9 text-secondary" value={values.shortMedicalHistory} />
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

export default ProfileEditorView;