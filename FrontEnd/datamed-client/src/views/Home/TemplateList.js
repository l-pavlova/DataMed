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
            todo: on click this one will open a modal dialog to open a templates from it:
            {<div className="add-template-btn" style={{ position: 'relative', top: 30 + '%', left: 45 + '%' }}>
                <div className="col-sm-14">
                    <a className="btn btn-info">Add new</a>
                </div>
            </div>}
        </div>
    );

}

export default Templates;

