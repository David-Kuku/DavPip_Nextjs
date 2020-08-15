import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Calenda from '../components/calender'
import Head from 'next/head'


const Archives =()=>{
    return(
        <div>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            </Head>
            <Navigation/>
            <div style={{height:"500px"}}>
            <div className="container-fluid">
                <div className="row">
                    <div class = "col-md-4"></div>
                    <div class = "col-md-4">
                       <p className="f4 mt1" style={{textAlign:"center"}}><b>Complete list of contents</b></p>
                       <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                       <Calenda style={{}}/>
                       </div>
                       
                    </div>
                    <div class = "col-md-4"></div>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default Archives