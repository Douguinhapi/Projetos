import React from 'react';
import Navbar from './Navbar';


export default function Header(){
    return(
        <header className='header container'>
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/001/199/298/non_2x/paw-png.png" alt="Logo" srcset="" />
            </div>
            <Navbar />
        </header>
    )
}