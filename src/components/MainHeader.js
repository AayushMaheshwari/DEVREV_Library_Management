import React from 'react';
import logo from '../styles/lib.png';
import '../styles/mainHeader.css';

export default function MainHeader() {

  return (
    <header>
        <div className= 'heading'>
            <div className="logo">
                <img src={logo} alt="LMA_Logo"/>
            </div>
            <div className= 'title'>
                <h1>LIBRARY MANAGEMENT APP</h1>
                <h2>Library On Your Fingertips</h2>
            </div>
        </div>
    </header>
  )
}