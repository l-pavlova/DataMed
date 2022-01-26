
import React, {useState} from 'react';
import avatar from "../../assets/doc.JPG";
import './HomeUserInfo.css';

import FileUploader from '../fileManagement/FileUploader';
import arrayBufferToBase64 from '../../utils/imgStringConverter';
const HomeUserView = ({
    values,
    handleFileUpload,
    handleProfilePicUpload
}) => {
    
    let image = avatar;
    if (values.image) {
        let base64String = arrayBufferToBase64(values.image)
        const base64Image = 'data:image/png;base64,'.concat(base64String);
        image = base64Image;
    }

    return (<div className='containerche'>
        <div className="main-body">


            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={image} alt="doc-avatar" className="doc-avatar" />
                                <div className="mt-3">
                                    <h4>  {values.firstName || 'Bochko'}  {values.lastName || 'Bochkov'}</h4>
                                    <p className="text-secondary mb-1" value={values.position || "Cardiologist"}>Cardiologist</p>
                                    <p className="text-muted font-size-sm">Sofia, Bulgaria</p>
                                    <FileUploader handleFileUpload={handleProfilePicUpload} text="Change profile pic"></FileUploader>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary" >
                                {values.firstName || 'Bochko'}  {values.lastName || 'Bochkov'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.email || 'sexydoctor@gmail.com'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Phone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.phoneNumber || '(239) 816-9029'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Hospital</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.hospital || 'Sveta Nedelq'}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Medical Unit</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {values.medicalUnit || 'Cardiology'}
                            </div>
                        </div>
                        <hr />
                        {/* <div className="row">
                            <div className="col-sm-14">
                                <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                            </div>
                        </div> */}
                    </div>
                </div>


            </div>
        </div>

    </div>
    )
}


export default HomeUserView