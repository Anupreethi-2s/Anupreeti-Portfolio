import React from 'react'
import skills from '../Data/skill'
import '../../CSS/skills.css'

const TechnicalSkills = () => {
  return (
    <div className='skills'>
        <div className='techskills'>
            <h1>Techinical Skills</h1>
            <div className='technicalskills'>
                {skills.techskills.map((item) => {
                    return (
                        <div className='skillcard'>
                            <div className="skillicon">
                                <img src={item.image} alt="" />
                            </div>
                            <h2>{item.skill}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default TechnicalSkills