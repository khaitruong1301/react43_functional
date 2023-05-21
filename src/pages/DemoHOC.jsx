import React, { useState } from 'react'
import HOCModal from '../HOC/HOCModal'
import Login from './Login'
import Register from './Register';
import Home from './Home';
import ContainerModal from '../HOC/ContainerModal';
import { useDispatch } from 'react-redux';
import { setModalAction } from '../redux/reducers/modalReducer';
/*
    HOC: Higher order component 
    Component chứa 1 component khác => tạo ra 1 component mới chứa logic của component đó
    Ví dụ: Modal thông tin lớp học, Modal thông tin lộ trình
*/

//Tạo ra 1 component login chứa trong modal

const LoginModal = new HOCModal(Login);
const RegisterModal = new HOCModal(Register);
const HomeModal = new HOCModal(Home);
export default function DemoHOC() {
    const [component, setComponent] = useState(<Login />);
    const dispatch = useDispatch();



    return (
        <div className='container'>
            <button onClick={() => {
                // setComponent(<Login />)
                const action = setModalAction(<Login />);
                dispatch(action);
            }} className='btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#modalId">Login</button>

            <button className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                // setComponent(<Register />)
                const action = setModalAction(<Register />);
                dispatch(action);
            }}>Register</button>


            <button className='btn btn-success mx-2' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                // setComponent(<Home />)
                const action = setModalAction(<Home />);
                dispatch(action);
            }}>Home</button>
            {/* <ContainerModal component={component} /> */}

        </div>
    )
}
