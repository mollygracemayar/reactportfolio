import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './header.js'
import Footer from './footer.js'
import About from './about.js'
import Work from './work.js'
import Resume from './resume.js'
import Contact from'./contact.js'



function ReactLearning(){
    return(
        <div>
            <Header/>
           
            <About/>
            <Work/>
            <Contact/>


    
       <Footer/>
        </div>
    )  
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<ReactLearning />)