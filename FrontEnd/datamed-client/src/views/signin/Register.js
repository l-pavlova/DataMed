import React, { useState } from 'react';
import signin from "../../assets/sign_up.png";
import { login, signupDoc } from '../../utils/authFunctions'
import userService from '../../services/userService'
import RegisterForm from './RegisterForm';
import NavBar from '../navigation/NavBar';
import './Register.css'
import Footer from '../navigation/Footer';


const Register = (
) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isDoctor, setIsDoctor] = useState(true);

    const handleRegister = async (userData) => {
        await signupDoc(userData, isDoctor);
        //await userService.register(userData);
        setIsLogin(true);
    };

    const handleLogin = async (userData) => {
        await login(userData.email, userData.password);
    }

    return (
       <div className='main'>
           <NavBar values={[]}></NavBar>
        <div className="register-wrapper">
           
            <img src={signin} alt="Logo"className="app-logo"/>
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