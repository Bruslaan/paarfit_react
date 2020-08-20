import React from 'react'
import './Logo.css'

interface Props {
    name: String
}

export const Logo: React.FC<Props> =({name}) => {
    return (
        <div className="logo">
            {name}
        </div>
    )
}

