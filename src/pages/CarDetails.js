import React, { useEffect } from 'react'
import { getUsers } from '../actions';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const CarDetails = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)


    useEffect(() => {
        dispatch(getUsers());
    }, [])
    return (
        <>
            <h1>saf</h1>
            {users.map(user => <h1>{user.vin}</h1>)}

        </>
    )
};

export default CarDetails;