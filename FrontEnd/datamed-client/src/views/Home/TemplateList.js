import React from 'react'

const Templates = ({ temps }) => {

    return (
        <div>
            <h6>Available tempaltes to fill for medical records:</h6>
            <ul>
                {
                    temps && temps.map(r => {
                        <li>{r}</li>
                    })
                }
            </ul>
        </div>
    );

}

export default Templates;

