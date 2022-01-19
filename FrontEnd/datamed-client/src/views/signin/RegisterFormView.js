import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterFormView.css';

const RegisterFormView = ({
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    isLogin,
    isDoctor,
    loading,
}) => {
    return (
        <Form noValidate onSubmit={handleSubmit}>
            {!isLogin &&
            <Form.Group controlId="formFirstName">
                <Form.Control 
                    type="text"
                    className="input-field first-name"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName && touched.firstName}
                />
                <ErrorMessage name="firstName" component="div" className="invalid-field-message"/>
            </Form.Group>
            }
            {!isLogin &&
            <Form.Group controlId="formLastName">
                <Form.Control 
                    type="text" 
                    className="input-field last-name"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName && touched.lastName}
                />
                <ErrorMessage name="lastName" component="div" className="invalid-field-message"/>
            </Form.Group>
            }
            {!isLogin &&
            <Form.Group controlId="formAge">
                <Form.Control 
                    type="text"
                    className="input-field age"
                    placeholder="Age"
                    name="age"
                    onChange={handleChange}
                    value={values.age}
                    isValid={touched.age && !errors.age}
                    isInvalid={!!errors.age && touched.age}
                />
                  <ErrorMessage name="age" component="div" className="invalid-field-message"/>
            </Form.Group>
            }
            {!isLogin &&
            <Form.Group controlId="formPhoneNumber">
                <Form.Control 
                    type="text"
                    className="input-field phone-number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={values.phoneNumber}
                />
            </Form.Group>
            }
            {!isLogin && isDoctor &&
            <Form.Group controlId="formPosition">
                <Form.Control 
                    type="text"
                    className="input-field position"
                    placeholder="Position"
                    name="position"
                    onChange={handleChange}
                    value={values.position}
                />
            </Form.Group>
            }
            {!isLogin && isDoctor &&
            <Form.Group controlId="medicalUnit">
                <Form.Control 
                    type="text"
                    className="input-field med-unit"
                    placeholder="Medical Unit"
                    name="medicalUnit"
                    onChange={handleChange}
                    value={values.medicalUnit}
                    isInvalid={!!errors.medicalUnit && touched.medicalUnit}
                />
                <ErrorMessage name="medicalUnit" component="div" className="invalid-field-message"/>
            </Form.Group>
            }
            {!isLogin && isDoctor  &&
            <Form.Group controlId="hospital">
                <Form.Control 
                    type="text"
                    className="input-field hospital"
                    placeholder="Hospital"
                    name="hospital"
                    onChange={handleChange}
                    value={values.hospital}
                />
            </Form.Group>
            }
            {!isLogin && isDoctor &&
            <Form.Group controlId="certifications">
                <Form.Control 
                    type="text"
                    className="input-field certifications"
                    placeholder="Certifications"
                    name="certifications"
                    onChange={handleChange}
                    value={values.certifications}
                />
            </Form.Group>
            }
             <Form.Group controlId="username">
                <Form.Control 
                    type="text" 
                    className="input-field username"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Control 
                    type="email" 
                    className="input-field email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email && touched.email}
                />
                <ErrorMessage name="email" component="div" className="invalid-field-message"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control 
                    type="password" 
                    className="input-field password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password && touched.password}
                />
                <ErrorMessage name="password" component="div" className="invalid-field-message"/>
            </Form.Group>
            {!isDoctor&& !isLogin && <Form.Group controlId="egn">
                <Form.Control 
                    type="text" 
                    className="input-field egn"
                    placeholder="EGN"
                    name="egn"
                    onChange={handleChange}
                    value={values.egn}
                />
            </Form.Group>}
            {!isDoctor&& !isLogin && <Form.Group controlId="weight">
                <Form.Control 
                    type="text" 
                    className="input-field weight"
                    placeholder="Weight"
                    name="weight"
                    onChange={handleChange}
                    value={values.weight}
                />
            </Form.Group>}
            {!isDoctor&& !isLogin && <Form.Group controlId="height">
                <Form.Control 
                    type="text" 
                    className="input-field height"
                    placeholder="Height"
                    name="height"
                    onChange={handleChange}
                    value={values.height}
                />
            </Form.Group>}
            {!isDoctor&& !isLogin && <Form.Group controlId="bloodType">
                <Form.Control 
                    type="text" 
                    className="input-field blood-type"
                    placeholder="Blood type"
                    name="bloodType"
                    onChange={handleChange}
                    value={values.bloodType}
                />
            </Form.Group>}
            <Button disabled={loading} variant="primary" type="submit" className="register-form-btn">
                {isLogin ? "Log In" : "Sign Up"}
            </Button>
        </Form>
    )
}

export default RegisterFormView;