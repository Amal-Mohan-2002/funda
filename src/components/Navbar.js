import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/navbar.css'
import Logo from '../images/Logo.svg'


export default function Navbar(){
    return(
        <div className='navbar'>
            
            <div className='nav-left'>
                <img className='logo-img' src={Logo}/>
            </div>
            <div className='nav-right'>
                <button className='credit'>Credits</button>
            </div>
        </div>
    )
}

// const useStyles = makeStyles(({
//     navbar:{
        
//     }
// }))