import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik'
import userService from '../../services/userService';
import ProfileEditorView from './ProfileEditorView';
import './ProfileEditor.css'

const ProfileEditor = ({
    handleSubmit,
    patient,
    handleChange
}) => {

    console.log('in component');
    const initialValues = {id:patient.id,
        firstName: patient.firstName, lastName: patient.lastName, age: '', phoneNumber: patient.phoneNumber,
        email: patient.email, egn: patient.egn, position: '', medicalUnit: '', hospital: '', certifications: '', password: '', weight: patient.weight || '', height: patient.height || '', shortMedicalHistory: '', pillsTakenRegularly: '', constantDiagnoses: ''
    };

    return (
        <Formik
            initialValues={
                initialValues
            }
            onSubmit={async (values) => {
                handleSubmit(values)
            }}>
            {(props) =>
                <ProfileEditorView
                    {...props}
                />
            }
        </Formik>
    )


}


export default ProfileEditor