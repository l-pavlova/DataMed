import React, { useState } from "react"
import { Form, FormControl, Dropdown, Button } from 'react-bootstrap'
import './SearchBar.css';


export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a className="search-caption"
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

export const CustomSearch = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
        const [patientName, setPatientName] = useState('');
        const [patientLastName, setPatientLastName] = useState('');
        const [patientEGN, setPatientEGN] = useState('');
        return (
            <div className="search-container">
                Search for patients' data
                <Form className="list-group">
                    <Dropdown>
                        <FormControl
                            type="search"
                            placeholder="First Name"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setPatientName(e.target.value)}
                            value={patientName}
                        />

                        <FormControl
                            type="search"
                            placeholder="Last name"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setPatientLastName(e.target.value)}
                            value={patientLastName}
                        />
                        <FormControl
                            type="search"
                            placeholder="EGN"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setPatientEGN(e.target.value)}
                            value={patientEGN}
                        />
                        <Dropdown.Item>
                            <Button variant="outline-success">Search</Button>
                        </Dropdown.Item>
                    </Dropdown>
                </Form>
            </div>
        );
    },
);

export const SearchBar = ({ handleSearchPatients }) => {

    const [value, setValue] = useState('');
    const [patientName, setPatientName] = useState('');
    const [patientLastName, setPatientLastName] = useState('');
    const [patientEGN, setPatientEGN] = useState('');
    return (
        <div className="search-container">
            Search for patients' data
            <Form className="list-group" onSubmit={async (e) => {
                e.preventDefault();
                handleSearchPatients(patientName, patientLastName, patientEGN);
            }}>
                <Dropdown>
                    <FormControl
                        type="search"
                        placeholder="First Name"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setPatientName(e.target.value)}
                        value={patientName}
                    />

                    <FormControl
                        type="search"
                        placeholder="Last name"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setPatientLastName(e.target.value)}
                        value={patientLastName}
                    />
                    <FormControl
                        type="search"
                        placeholder="EGN"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setPatientEGN(e.target.value)}
                        value={patientEGN}
                    />
                    <Button variant="outline-success" className="search-patients" type="submit">Search</Button>
                </Dropdown>
            </Form>
        </div>
    );
}


