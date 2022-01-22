import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik'
import { ErrorMessage } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileEditorView = ({
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    loading,
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
                            {values.fName || 'Bochka'}  {values.lName || 'Bochkova'}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {values.mail || 'sexypatient@gmail.com'}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <Field  onChange={handleChange} value={values.phone} name="phoneNumber" type="text" className="input-field col-sm-9 text-secondary" placeholder='Phone' />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Age</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="age" placeholder="Age" className="input-field col-sm-9 text-secondary" value={values.ag} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">egn</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="egn" className="input-field col-sm-9 text-secondary" value={values.eg} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Height</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="height" className="input-field col-sm-9 text-secondary" value={values.hght} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Weight</h6>
                        </div>
                        <Field onChange={handleChange} type="text" name="weight" className="input-field col-sm-9 text-secondary" value={values.wght} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Blood type</h6>
                        </div>
                        <Field type="text" name="bloodType" className="input-field col-sm-9 text-secondary" value={values.bt} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Constant diagnoses</h6>
                        </div>
                        <Field type="text" name="constantDiagnoses" className="input-field col-sm-9 text-secondary" value={values.diagnoses} />
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Pills taken</h6>
                        </div>
                        <Field onChange={handleChange} onChange={handleChange}type="text" name="pillsTakenRegularly" className=" input-field col-sm-9 text-secondary" value={values.pills} />
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