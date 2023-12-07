import React, { useRef, useState } from 'react'
import "../styles/PersonalInfo.css"
import { useDispatch } from 'react-redux';
import { actionForSavePersonalData } from '../store/actions/actionCreator';
import { toast } from 'react-toastify';

function PersonalInformation() {
    const [personalInfo, setpersonalInfo] = useState({
        fullname: "",
        jobTitle: "",
        email: "",
        address: "",
        mobileNo: "",
        profileImg: ""
    });
    const dispatch = useDispatch();
    const refOfForm = useRef();

    const refForImg = useRef(null);
    const refForInput = useRef(null);


    function handleSaveData(e) {
        e.preventDefault();
        const { fullname, jobTitle, email, address, mobileNo } = personalInfo;
        if (!fullname, !jobTitle, !email, !address, !mobileNo) {
            toast.warn("Please fill all info")
            return;
        }
        dispatch(actionForSavePersonalData(personalInfo));
        setpersonalInfo({
            fullname: "",
            jobTitle: "",
            email: "",
            address: "",
            mobileNo: ""
        });
        refOfForm.current.reset()

    }

    function TakingImgAsInput() {
        var inputEle = refForInput.current;
        SetImgToUI(inputEle);

    }

    function SetImgToUI(inputEle) {
        let imgEle = refForImg.current;

        var fr = new FileReader();
        fr.readAsDataURL(inputEle.files[0]);
        fr.onload = function () {
            imgEle.src = fr.result;
            setpersonalInfo({ ...personalInfo, profileImg: imgEle.src })
        }
    }
    console.log(personalInfo);

    return (
        <div className='personal-info-box' >
            <label htmlFor="">Upload your photo</label>

            <form action="#" className='personal-info-form' ref={refOfForm}>
                <div className='img-box'>
                    <img ref={refForImg} src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' accept="image/*" />
                </div>
                <label htmlFor="input" className='input-label' >
                    Browse  photo
                    <input type="file" id='input' ref={refForInput} onChange={TakingImgAsInput} />
                </label>

                <div className="inputs-boxes">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" placeholder='John Martin'
                        onChange={(e) => {
                            setpersonalInfo({ ...personalInfo, fullname: e.target.value })
                        }} />
                </div>
                <div className="inputs-boxes">

                    <label htmlFor="job-title">Job Title</label>
                    <input type="text" placeholder='UX UI Developer'
                        onChange={(e) => {
                            setpersonalInfo({ ...personalInfo, jobTitle: e.target.value })
                        }}

                    />
                </div>
                <div className="inputs-boxes">

                    <label htmlFor="Email">Email Address</label>
                    <input type="text" onChange={(e) => {
                        setpersonalInfo({ ...personalInfo, email: e.target.value })

                    }} placeholder="abc123@gmail.com" />
                </div>
                <div className="inputs-boxes">

                    <label htmlFor="Number">Mobile Number</label>
                    <input type="text" onChange={(e) => {
                        setpersonalInfo({ ...personalInfo, mobileNo: e.target.value })
                    }} placeholder='+91XXXXXXXXX' />
                </div>
                <div className="inputs-boxes">

                    <label htmlFor="Address">Address</label>
                    <textarea type="text" onChange={(e) => {
                        setpersonalInfo({ ...personalInfo, address: e.target.value })
                    }} placeholder='Enter the Address Please' ></textarea>
                </div>
                <button onClick={handleSaveData} className='common-btn'> Save info</button>

            </form>
        </div>
    )

}

export default PersonalInformation
