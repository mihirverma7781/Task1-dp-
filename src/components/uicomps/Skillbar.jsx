import React from 'react'
import '../stylesheets/Skills.css'
const Skillbar = ({item}) => {
    return (
        <div className="skillbar">
            <div className="skill-head">
    <h3>{item.skill}</h3>
            </div>
        </div>
    )
}

export default Skillbar
