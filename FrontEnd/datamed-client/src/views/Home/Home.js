import React, { useState } from 'react';
import HomeUserInfo from './HomeUserInfo';
import NavBar from '../navigation/NavBar';
//import SearchPage from './SearchBar';
import { SearchBar } from './SearchBar';
import Footer from '../navigation/Footer';
import UserList from './UserList';
import userService from '../../services/userService';
import { findPatients } from '../../utils/userFilters';
const Home = () => {

    const initialValues = { firstName: '', lastName: '', age: '', phoneNumber: '', email: '', username: '', position: '', medicalUnit: '', hospital: '', certifications: '', password: '' };

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

    const handleFindPatients = async (userData) => {
        await findPatients(userData);
        //await userService.register(userData);
       
    };

const [patients, setPatients] = useState(testValues);
return (<div>
    <NavBar
        values={initialValues}>
    </NavBar>
    <HomeUserInfo
        values={initialValues}>
    </HomeUserInfo>
    <SearchBar>
    </SearchBar>
    <UserList
        users={patients}>
    </UserList>
    <Footer>
    </Footer>
</div>);
}

export default Home