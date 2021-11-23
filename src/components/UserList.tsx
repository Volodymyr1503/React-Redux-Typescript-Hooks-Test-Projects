import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchedUsers } from '../store/action-creators/user';

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchedUsers())
    }, [])

    if (loading) {
        return <h2>Please, wait! Fetching...</h2>
    }

    if (error) {
        return <h2>Error with fetching! Try refresh your browser.</h2>
    }

    const logInfo = (e: React.MouseEvent) => {
        console.log(e)
    }
    return (
        <div>
            <h1>We have the next users:</h1>
            <ul>
                {users.map(user => 
                    <li key={user.id} onClick={logInfo}>{user.name}</li>
                )}
            </ul>
        </div>
    )
}

export default UserList;