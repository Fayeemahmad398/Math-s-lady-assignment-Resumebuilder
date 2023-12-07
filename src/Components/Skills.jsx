import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionForAddSkills } from '../store/actions/actionCreator';
import "../styles/skills.css"
import { toast } from 'react-toastify';

function Skills() {
    const [skills, setSkills] = useState("");
    const dispatch = useDispatch();

    return (
        <div className='skills-box'>
            <h2>Skills</h2>
            <input type="text" onChange={(e) => { setSkills(e.target.value) }} value={skills} placeholder='Add skills to your resume' />
            <button onClick={
                () => {
                    if(skills){

                        dispatch(actionForAddSkills(skills));
                        setSkills("");
                    }else{
                        toast.warn("Write Some skill Please")
                    }
                }
            } className='common-btn'>Add Skills</button>

        </div>
    )
}

export default Skills