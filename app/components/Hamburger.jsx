"use client"
import React from 'react';

const HamBurgerIcon = ()=>{
    const toggleMobileMenu = () => {
        document.getElementById("mobile-menu").classList.toggle("hidden")
    }
    return (
        <button type="button" className="text-gray-700 hover:text-primary" id="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    )
}

export default HamBurgerIcon;
