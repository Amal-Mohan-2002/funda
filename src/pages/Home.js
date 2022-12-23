import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Home() {
  return (
        <div>
            <Navbar/>
            <div className='container'>
                <div className='wrapper'>
                <h2 className='heading'>
                    Get your news right with <span  className='logo-text'>F</span><span className='logo-text-last'>unda</span>
                </h2>
                <p className='text'>
                    Funda is an AI-powered tool to measure the authenticity of any news article and detect fake news just by pasting the URL of the source article 
                </p>
                <TextField className='field' id="outlined-basic" label="Type the URL of the news article" variant="outlined" />
                </div>
            </div>            
        </div>
    
  )
}

export default Home