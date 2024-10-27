import React from 'react';
import './header.css'
import HorizontalDivider from '../HorizontalDivider';
import ButtonDefault from '../ButtonDefault';

function Header({tittle}) {
    return (
        <div className='panelHeader'>
            <div className='panelTitle'>
                <h1>{tittle}</h1>    
                <div className='panelButtons'>
                    <ButtonDefault icon={"add"} text={""}/>                 
                </div>
            </div>
            <HorizontalDivider/>
        </div>
    )
}

export default Header