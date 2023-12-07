import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateSideDatafunc } from '../store/actions/actionCreator';
import "../styles/leftPortion.css"




function LeftPortion() {
    const dispatch = useDispatch();

    const sidebarData = useSelector((store) => {
        return store.reducer.sidebarData1;
    });

    return (
        <div className='all-info-boxes-at-left'>
            <div className='all-boxes-info'>
                {
                    sidebarData.map((obj, index) => {
                        return (
                            <div onClick={() => { dispatch(updateSideDatafunc(obj)) }} className='left-info-box'>
                                <h4>{obj.info}</h4>
                                <span className='plus-minus'> {obj.ispen ? "-" : "+"}</span>
                            </div>)
                    })
                }
            </div>

        </div>
    )
}

export default LeftPortion