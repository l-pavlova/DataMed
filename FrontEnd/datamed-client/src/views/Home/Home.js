import React, { useState, useEffect } from 'react';
import HomeUserInfo from './HomeUserInfo';
import NavBar from '../navigation/NavBar';
//import SearchPage from './SearchBar';
import { SearchBar } from './SearchBar';
import Footer from '../navigation/Footer';
import UserList from './UserList';
import { findPatients } from '../../utils/userFilters';
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


    const testValues = [
        {
            "id": 1,
            "username": "tosho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 2,
            "username": "gosho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        }
        , {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        }, {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },
        {
            "id": 3,
            "username": "josho",
            "age": 0,
            "email": "gosho",
            "records": [],
            "height": 0.0,
            "weight": 0.0
        },


    ];

    const handleFindPatients = async (name, lastName, egn) => {
        console.log('in');
        console.log(name);
        await findPatients(name, lastName, egn).then(pats => {
            console.log(pats);
            setPatients(pats)
        });
       
        //await userService.register(userData);

    };


    return (<div>
        <NavBar
            values={initialValues}>
        </NavBar>
        <HomeUserInfo
            values={initialValues}>
        </HomeUserInfo>
        <SearchBar handleSearchPatients={handleFindPatients}>
        </SearchBar>
        {showTable && <UserList
            users={patients}>
        </UserList>}
        <Footer>
        </Footer>
    </div>);
}

export default Home