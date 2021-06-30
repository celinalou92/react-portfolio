import React from 'react';
import menu from './assets/imgs/menu.png';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="brand">
                <a class="navbar-brand" href="/">Louissaint</a>
            </div>
            <div class="nav_content">
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src={menu} alt="exapandMenu" />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/'>Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to='/resume'>Resume<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};


export default NavBar;
