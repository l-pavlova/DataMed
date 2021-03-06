import React from 'react'
import { Link } from 'react-router-dom'

import './UserList.css'

const UserList = ({
    users,
    showUserData,
    docId
}) => {

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
                        <td> <Link to={`/patient`} state={{ id: user.id, isDoc: true, docId: docId }}>{user.firstName || 'vascho'}</Link></td>
                        <td>{user.lastName || 'imence '}</td>
                        <td>{user.egn || "egenence"}</td>
                    </tr>)
                }
            </tbody>
        </table >
        </div>)
}

export default UserList;