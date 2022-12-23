import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/result.css'

function result(){
    return(
        <>
            <Navbar/>
            <div className="result-container">
                <div className="heading">
                    <h3 className="result-text">Results</h3>
                </div>
                {/* <div className="url-text">
                    <h3>Url of the given news article: </h3>
                    <h3>thisisdefinitelyfake.com</h3>
                </div> */}
                <div className="final-results">
                    {/* <div className="authenticity">
                        <h5>Authenticity: </h5>
                        <h1>FAKE</h1>
                    </div>
                    <div className="statistics">
                        <div className="stat-bar">
                            <div className="green">
                            </div>
                            <div className="red">
                            </div>
                        </div>
                        <div className="stat-percentage">
                        </div>
                    </div> */}

                    <div className="text-results">
                        <h5>Transcribed audio:</h5>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default result