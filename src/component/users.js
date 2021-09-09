import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'

const Users = () => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.usersList)
    const {loading, error, users} = usersList
    useEffect(() => {
        dispatch(getUsers())
        }, [dispatch])
    return (
        <>
            {loading ? "Loading..." : error ? error.message : users.map(u => <div  key={u.id}>
                <h3>{u.name}</h3>
            </div>)}
        </>
    )
}

export default Users