import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const MyNavbar = () => {
    const {setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        navigate('/login')
    }
    return (
        <div className="navbar">
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className="navbar__links">
                <Link className="navbar__link" to="about">About</Link>
                <Link className="navbar__link" to="posts">Posts</Link>
            </div>
        </div>
    );
};

export default MyNavbar;