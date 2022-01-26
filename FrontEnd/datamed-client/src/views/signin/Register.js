import React, { useState } from 'react';
import signin from "../../assets/sign_up.png";
import { login, signup } from '../../utils/authFunctions'
import RegisterForm from './RegisterForm';
import NavBar from '../navigation/NavBar';
import './Register.css'
import Footer from '../navigation/Footer';
import { useNavigate } from "react-router-dom";

const Register = (
) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isDoctor, setIsDoctor] = useState(true);
    const navigate = useNavigate();

    const handleRegister = async (userData) => {
        await signup(userData, isDoctor)
            .then(() => { setIsLogin(true) })
            .catch((res) => setIsLogin(false));
    };

    const handleLogin = async (userData) => {
        let data = { username: userData.username, password: userData.password };
        await login(data).then((data) => {
            console.log(data);
            if (data.role == "ROLE_DOCTOR") {
                console.log('doctorche')
                navigate(`/${data.id}`);
            } else {
                console.log('pacientche')
                let state = { id: data.id, isDoc: false };
                navigate(`/patient`, { state: state });
            }

        });
    }

    return (
        <div className='main'>
            <NavBar values={[]}></NavBar>
            <div className="register-wrapper">

                <img src={signin} alt="Logo" className="app-logo" />
                <div className="header-wrapper">
                    <h1 className="register-title"> {isLogin ? "Log in to DataMed" : "Sign Up to DataMed"}</h1>
                    <div className="register-subtitle-wrapper">
                        <h5 className="register-subtitle"> {isLogin ? "Don't have an account?" : "Already have an account?"}</h5>
                        <button className="register-login-link-btn" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Log In"}</button><br />
                    </div>
                    {!isLogin && <div>
                        <h5 className="register-as-usertype"> {isDoctor ? "Want to create patient profile?" : "Want to create doctor profile?"}</h5>
                        <button className="patient-doctor-link-btn" onClick={() => setIsDoctor(!isDoctor)}>{isDoctor ? "Sign up as patient" : "Sign up as doctor"}</button>
                    </div>}

                </div>
                <div className="register-form-wrapper">
                    <RegisterForm
                        isLogin={isLogin}
                        isDoctor={isDoctor}
                        handleRegister={handleRegister}
                        handleLogin={handleLogin}
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Register;