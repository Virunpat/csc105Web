import React from 'react'
import '../styles/Admin.css'
import { Navigate } from 'react-router-dom'

function Admin({ userLogin, setuserLogin }) {
    const handleLogout = () => setuserLogin(false)

    if (!userLogin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQjS9WkTIKKByXNBp9i1DXLyptzKswXMvdw&usqp=CAU" alt="Happy monkey" />
            <h1>This is Admin Page</h1>
            <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Admin
