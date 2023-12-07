import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionForSaveExperienceInfo } from '../store/actions/actionCreator';
import { toast } from 'react-toastify';
import "../styles/experience.css"

function ExperienceForm() {
    const [experienceInfo, setExperienceInfo] = useState({
        jobTitle: "",
        companyName: "",
        from: "",
        to: "",
        description: ""
    });
    const refForForm = useRef(null);
    const dispatch = useDispatch();

    function handleExperienceInfo(e) {
        e.preventDefault();

        if (!experienceInfo.jobTitle ||
            !experienceInfo.companyName ||
            !experienceInfo.from ||
            !experienceInfo.to || !experienceInfo.description) {
            toast.warn("Enter the Infomation Properly")
            return;
        }
        dispatch(actionForSaveExperienceInfo(experienceInfo));
        console.log(experienceInfo)

        refForForm.current.reset();
        setExperienceInfo({
            jobTitle: "",
            companyName: "",
            from: "",
            to: "",
            description: ""
        })


    }

    return (
        <div className='experience-box'>
            <h2>Experience</h2>

            <form action="" ref={refForForm} className='personal-info-form'>
                <div className='inputs-boxes'>
                    <label htmlFor="">Job Title</label >
                    <input type="text" onChange={(e) => {
                        setExperienceInfo({ ...experienceInfo, jobTitle: e.target.value });
                    }} />
                </div>

                <div className='inputs-boxes'>
                    <label htmlFor="">Company Name</label>
                    <input type="text" onChange={(e) => {
                        setExperienceInfo({ ...experienceInfo, companyName: e.target.value });
                    }} />
                </div>

                <div className='inputs-boxes'>
                    <label htmlFor="">Mention Duration Please.</label>
                    <div>
                        Starting Date.
                        <input type="date" onChange={(e) => {
                            setExperienceInfo({ ...experienceInfo, from: e.target.value });
                        }} />
                    </div>
                    <div>
                        Last Date.
                        <input type="date" onChange={(e) => {
                            setExperienceInfo({ ...experienceInfo, to: e.target.value });
                        }} />
                        </div>
                </div>

                <div className='inputs-boxes'>
                    <textarea name="" id="" cols="30" rows="10"
                        placeholder='Enter the Description Please'
                        onChange={(e) => { setExperienceInfo({ ...experienceInfo, description: e.target.value }) }}></textarea>
                </div>
                <button onClick={(e) => {
                    handleExperienceInfo(e)

                }} className='common-btn'>Save Info</button>
            </form>

        </div>
    )
}

export default ExperienceForm