import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img 
            className="header__logo"
            src="https://png2.cleanpng.com/sh/51fe3fef939efbbc11d82ebb3877dba1/L0KzQYm3VMA4N6lofZH0aYP2gLBuTgRqdpVqip91b3fyPbT2jgB2fJZ3Rdtsb372PbP8jfJtbV5yedDwbz35dbT7jCIuPZJoUNQ7NEi2QLa6gsAvO2oASKIBMkC0RYO6UcAzOmk1SqI5Mz7zfri=/kisspng-tinder-logo-computer-icons-bumble-mango-vector-5ac8b24830e3b0.3990062015231022802003.png" alt="logo"
            />
            <IconButton>
            <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
            
        </div>
    )
}

export default Header
