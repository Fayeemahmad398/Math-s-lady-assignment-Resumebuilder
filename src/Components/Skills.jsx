import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionForAddSkills } from '../store/actions/actionCreator';
import "../styles/skills.css"

function Skills() {
    const [skills, setSkills] = useState("");
    const dispatch = useDispatch();

    return (
        <div className='skills-box'>
            <h2>Skills</h2>
            <input type="text" onChange={(e) => { setSkills(e.target.value) }} value={skills} placeholder='Add skills to your resume' />
            <button onClick={
                () => {
                    dispatch(actionForAddSkills(skills));
                    setSkills("");
                }
            } className='common-btn'>Add Skills</button>

        </div>
    )
}

export default Skills