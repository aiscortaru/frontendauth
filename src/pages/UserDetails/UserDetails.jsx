import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

const UserDetails = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const {name, email, _id} = userInfo;

    return (
        <ListGroup>
            <ListGroup.Item>Name: {name} </ListGroup.Item>
            <ListGroup.Item>Email: {email}</ListGroup.Item>
            <ListGroup.Item>Id: {_id}</ListGroup.Item>
        </ListGroup>
    )
}

export default UserDetails;
