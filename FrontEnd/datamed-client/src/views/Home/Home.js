import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeUserInfo from './HomeUserInfo';
import NavBar from '../navigation/NavBar';
import { SearchBar } from './SearchBar';
import Footer from '../navigation/Footer';
import UserList from './UserList';
import { findPatients } from '../../utils/userFilters';
import Templates from './TemplateList';
import recordsService from '../../services/recordsService';
import userService from '../../services/userService';

const Home = () => {

    const initialValues = { firstName: '', lastName: '', age: '', phoneNumber: '', email: '', username: '', position: '', medicalUnit: '', hospital: '', certifications: '', password: '' };


    const { id } = useParams();
    const [userModel, setUserModel] = useState(false);

    useEffect(() => {
        console.log('in use effect')
        userService.getDoctorById(id).then(res => {
            console.log(res);
            setUserModel(res);
        });
    }, []);

    const [patients, setPatients] = useState([]);
    const [showTable, setShowTable] = useState(false);
    useEffect(() => {
        console.log(patients);
        if (patients.length > 0) {
            setShowTable(true);
        }
    }, [patients]);

    const handleFindPatients = async (name, lastName, egn) => {
        console.log('in');
        console.log(name);
        await findPatients(name, lastName, egn).then(pats => {
            console.log(pats);
            setPatients(pats)
        });
    };

    const handleProfilePicUpload = async (file) => {
        let formData = new FormData();
        formData.append('picture', file);
        recordsService.addProfilePicDoc(formData, userModel.id).then(() => {
            setUserModel(userService.getDoctorById(userModel.id));
        }).catch(err => {
            userService.getDoctorById(userModel.id).then(gotten => {
                console.log(gotten);
                setUserModel(gotten);
            })
        });
    }

    return (<div>
        {userModel && <NavBar
            values={userModel}
            isSignedIn={true}>
        </NavBar>}
        {userModel && <HomeUserInfo
            values={userModel || initialValues}
            handleProfilePicUpload={handleProfilePicUpload}>
        </HomeUserInfo>}
        <SearchBar handleSearchPatients={handleFindPatients}>
        </SearchBar>
        {showTable && <UserList
            users={patients} docId={id}>
        </UserList>}
        {userModel && <Templates>
        </Templates>}
        <Footer>
        </Footer>
    </div>);
}

export default Home