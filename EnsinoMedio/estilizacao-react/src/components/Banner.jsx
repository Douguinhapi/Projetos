import React from 'react';
import TextBig from './TextBig';
import Button from './Button';


export default function Banner(){
    return(
        <div className='banner container'>
            <div className="two-column content">
                <div className="inner-content">
                    <TextBig label="Bem-vindo"/>
                    <p>Seja bem-vindo ao site.</p>
                    <Button label="Saiba mais" />
                </div>
            </div>
            <div className="two-column content">
                <img src="https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png" alt="Cachorro" srcset="" />
            </div>
        </div>
    )
}