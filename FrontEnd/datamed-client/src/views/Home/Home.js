import React, { useState, useEffect } from 'react';
import HomeUserInfo from './HomeUserInfo';
import NavBar from '../navigation/NavBar';
import { SearchBar } from './SearchBar';
import Footer from '../navigation/Footer';
import UserList from './UserList';
import { findPatients } from '../../utils/userFilters';
import Templates from './TemplateList';

const Home = () => {

    const initialValues = { firstName: '', lastName: '', age: '', phoneNumber: '', email: '', username: '', position: '', medicalUnit: '', hospital: '', certifications: '', password: '' };
    const [patients, setPatients] = useState([]);
    const [showTable, setShowTable] = useState(false);
    useEffect(() => {
        console.log(patients);
        if (patients.length > 0) {
            setShowTable(true);
        }
    }, [patients])

    const handleFindPatients = async (name, lastName, egn) => {
        console.log('in');
        console.log(name);
        await findPatients(name, lastName, egn).then(pats => {
            console.log(pats);
            setPatients(pats)
        });
    };


    return (<div>
        <NavBar
            values={initialValues}
            isSignedIn={true}>
        </NavBar>
        <HomeUserInfo
            values={initialValues}>
        </HomeUserInfo>
        <SearchBar handleSearchPatients={handleFindPatients}>
        </SearchBar>
        {showTable && <UserList
            users={patients}>
        </UserList>}
        <Templates>
        </Templates>
        <Footer>
        </Footer>
    </div>);
}

export default Home