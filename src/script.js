import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Header from './header.js'
import Footer from './footer.js'
import MainContent from './main.js'
import About from './about.js'
import Work from './work.js'
import Resume from './resume.js'
import Contact from'./contact.js'



function ReactLearning(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <About/>
            <Work/>
            


    
       <Footer/>
        </div>
    )  
}

ReactDOM.createRoot(document.getElementById('root'), <ReactLearning/>)