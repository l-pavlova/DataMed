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

export const SearchBar = () => {

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
}


/*export const SearchBar = () => {
    return (
        <div className="search-container">
            Search for patients' data &#x25bc;
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" className="caption">
                     Search for patients' data &#x25bc;
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomSearch}>
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                        Orange
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}*/

