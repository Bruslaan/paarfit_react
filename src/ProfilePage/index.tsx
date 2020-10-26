import React, { useContext } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import { handleLogout } from '../firebase'
import { AuthContext } from '../AuthProvider'
export default function ProfilePage() {
    const { user, userInformation } = useContext(AuthContext);


    return (
        <div className="center__all">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="test" />
            <p>{user?.email}</p>
            <p>{userInformation.first} Kartoschka</p>

            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}
