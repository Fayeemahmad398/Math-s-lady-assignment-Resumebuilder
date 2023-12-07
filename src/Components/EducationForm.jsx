import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { actionForSaveEducationInfo } from '../store/actions/actionCreator';
import "../styles//education.css"

function EducationForm() {
    const [EducationInfo, setEducationInfo] = useState({
        degree: "",
        college: "",
        cgpa: ""
    });
    const dispatch = useDispatch();
    const refForForm = useRef();


    function handleEducationInfo(e) {
        e.preventDefault();
        if (!EducationInfo.degree || !EducationInfo.college || !EducationInfo.cgpa) {
            toast.warn("Enter All info Correctly please");
            return;
        }
        dispatch(actionForSaveEducationInfo(EducationInfo));
        refForForm.current.reset();
        setEducationInfo({
            degree: "",
            college: "",
            cgpa: ""
        })

    }
    console.log(EducationInfo)

    return (
        <div className='education-box'>
            <h2>Education</h2>
            <form action="" ref={refForForm} className='personal-info-form' >

                <div className="inputs-boxes">
                    <label htmlFor="">Course/Degree</label>
                    <input type="text" onChange={(e) => {
                        setEducationInfo({ ...EducationInfo, degree: e.target.value })
                    }} />
                </div>
                <div className="inputs-boxes">
                    <label htmlFor="">College/School</label>
                    <textarea name="" id="" cols="30" rows="5" placeholder='Enter the College name'
                        onChange={(e) => {
                            setEducationInfo({ ...EducationInfo, college: e.target.value })
                        }}  ></textarea>
                </div>
                <div className="inputs-boxes">
                    <input type="number" min={0} max={10} onChange={(e) => {
                        setEducationInfo({ ...EducationInfo, cgpa: e.target.value })
                    }} placeholder='Enter the CGPA' />
                </div>
                <button onClick={handleEducationInfo} className='common-btn'>Save Info</button>

            </form>


        </div>
    )
}

export default EducationForm