import React from "react";
import  ReactDOM  from "react-dom";
import myImage from "./IMG_2715.JPEG"

function about(){
    return (<div className="about">
        <h1>
    About Me
</h1><div class="paragraph">
    <img src={myImage} alt="Molly Grace Niemeyer"/>
    <div id="aboutDiscription">
            I am just starting out in coding but I find it fun and interesting. I'm looking forward to working in the gaming community. I'm not sure where in the gaming community I would work but I am very adaptable as long as you give me guidance.
    </div>
</div>
</div>
)
}
export default about