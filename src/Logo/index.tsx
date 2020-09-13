import React from 'react'
import './Logo.css'
import { useHistory } from 'react-router'

interface Props {
    name: String
}

export const Logo: React.FC<Props> =({name}) => {
    const history = useHistory()
    return (
        <div onClick={()=>history.push("/")} className="logo">
            {name}
        </div>
    )
}

