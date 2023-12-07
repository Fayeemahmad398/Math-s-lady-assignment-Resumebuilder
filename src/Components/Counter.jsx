import React, { useState } from 'react'
import { actionCreatorCounter } from '../store/actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
function Counter() {
    const dispatch = useDispatch();
    const store = useSelector((store) => {
        return store.reducer

    });

    console.log(store);
    return (
        <div>

            <h1>{store.count}</h1>
            <button onClick={() => { dispatch(actionCreatorCounter()) }}>+</button>

        </div>
    )
}

export default Counter