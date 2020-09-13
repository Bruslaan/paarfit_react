import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import { handleLogout } from '../firebase'
export default function index() {
    return (
        <div className="center__all">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="test" />
            <button onClick={() => handleLogout()}>Logout</button>
        </div>
    )
}
