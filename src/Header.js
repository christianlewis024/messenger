import React from 'react'
import "./Header.css"
import {useStateValue} from "./StateProvider"
import { auth } from './firebase'
import { Link } from 'react-router-dom'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="https://www.extremetech.com/wp-content/uploads/2017/10/AIM-Logo.png"/>
            </Link>
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
           
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
