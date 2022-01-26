import React from 'react';
import { Formik } from 'formik'
import ProfileEditorView from './ProfileEditorView';
import './ProfileEditor.css'

const ProfileEditor = ({
    handleSubmit,
    patient,
}) => {

    const initialValues = {id:patient.id,
        firstName: patient.firstName, lastName: patient.lastName, age: '', phoneNumber: patient.phoneNumber,
        email: patient.email, egn: patient.egn, position: '', medicalUnit: '', hospital: '', certifications: '', password: '', weight: patient.weight || '', height: patient.height || '', shortMedicalHistory: '', pillsTakenRegularly: '', constantDiagnoses: ''
    };

    return (
        <Formik
            initialValues={
                patient || initialValues
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