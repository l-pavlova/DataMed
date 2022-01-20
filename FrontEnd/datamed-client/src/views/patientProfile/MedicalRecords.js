import React from 'react'

const MedicalRecords = ({ recs }) => {
//todo: add link to record page
    return (
        <div>
            <ul>
                {
                    recs.map(r => {
                        <li>{r}</li>
                    })
                }
            </ul>
        </div>
    );

}

export default MedicalRecords;

