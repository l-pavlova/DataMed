import React from 'react'

const MedicalRecords = ({ recs }) => {

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

