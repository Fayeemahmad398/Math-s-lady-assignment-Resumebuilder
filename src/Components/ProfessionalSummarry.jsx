import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionforProfessionalSummary } from '../store/actions/actionCreator';
import { toast } from 'react-toastify';
import "../styles/summarry.css"

function ProfessionalSummarry() {

  const [summarry, setSummarry] = useState("");
  const dispatch = useDispatch();

  const store = useSelector((store) => {
    return store.reducer;
  });

  console.log(store);

  function handleSummaryData() {
    if (!summarry) {
      toast.warn("Enter the Summary please!")
      return;
    }
    dispatch(actionforProfessionalSummary(summarry));

  }

  return (
    <div className='summarry-box'>
      <h2>Summary</h2>
      <textarea name="" id="" cols="30" rows="10" onChange={(e) => {
        setSummarry(e.target.value)
      }
      } placeholder='Type Something here'>{summarry}</textarea >
      <button onClick={() => {
        handleSummaryData()



      }} className='common-btn'>Save Info</button>

    </div>
  )
}

export default ProfessionalSummarry