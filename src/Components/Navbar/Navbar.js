import React, { useState } from 'react';

const Navbar = () => {
    return (
        <div className="top-0 sticky z-50">
            <div class="navbar bg-base-200 lg:px-24 px-5 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skill'>Skill</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl font-bold">Shakil</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 font-bold text-slate-600">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skill'>Skill</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;