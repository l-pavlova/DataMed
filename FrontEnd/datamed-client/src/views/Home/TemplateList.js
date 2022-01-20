import React from 'react'
import { Button } from 'react-bootstrap';
import './Templates.css'
const Templates = ({ temps }) => {

    return (
        <div className='templates-container'>
            Available tempaltes to fill for medical records:
            <ul>
                {
                    temps && temps.map(r => {
                        <li>{r} <Button>Fill</Button></li>
                    })
                }
            </ul>
        </div>
    );

}

export default Templates;

