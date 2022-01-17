import React from 'react'

import './UserList.css'


const User = ({ props }) => {
    return (<tr>
        <td>{props.firstName || ''}</td>
        <td>{props.lastName || ''} </td>
        <td>{props.EGN || ''} </td>
    </tr>)
}

const UserList = ({ users }) => {

    return (
    <div className='user-container '><table className="table table-striped">
        <thead className="table-head">
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">EGN</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => <tr key={user.username.toString()} className="table-row">
                    <td><a href="#">{user.username || ' '}</a></td>
                    <td><a>{user.lastName || 'egenence '} </a></td>
                    <td><a>{user.EGN || "egenence"}</a></td>
                </tr>)
            }
        </tbody>
    </table >
    </div>)
}

export default UserList;